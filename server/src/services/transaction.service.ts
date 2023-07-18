import Transaction from "../models/transaction.model";
import userService from "./user.service";

type User = {
  name: string;
  id: number;
};

type TransactionInit = {
  spender: number;
  payment_of: string;
  amount: number;
  benefactor: Array<number>;
  group: number;
};

type Transaction = {
  spender: number;
  payment_of: string;
  amount: number;
  benefactor: Array<string>;
  benefactorData: Array<User>;
  group: number;
  spenderName: string;
};

const addTransaction = async (formData: TransactionInit) => {
  const { spender, payment_of, amount, benefactor, group } = formData;
  try {
    const individualShare = calculateIndividualShare(amount, benefactor.length);

    const transaction = await Transaction.create({
      spender,
      payment_of,
      amount,
      benefactor,
      group,
      individualShare,
    });

    return transaction.dataValues;
  } catch (error) {
    console.log("Error adding transaction, ", error);
    throw new Error("Error adding transaction");
  }
};

const getTransaction = async (groupId: number) => {
  const transactions = await Transaction.findAll({
    where: { group: groupId },
  }).then((data) =>
    data.map((transaction) => ({
      ...transaction.dataValues,
      benefactor: transaction.get("benefactor"),
    }))
  );
  const populatedData = await populateTransactions(transactions);
  return populatedData;
};

const populateTransactions = async (transactions: Transaction[]) => {
  const data = await Promise.all(
    transactions.map(async (transaction) => {
      transaction.spenderName = await userService.getUsername(
        transaction.spender.toString()
      );
      transaction.benefactorData = await getBenefactorDetails(
        transaction.benefactor
      );
      return transaction;
    })
  );
  return data;
};

const getBenefactorDetails = async (benefactors: string[]) => {
  const data = await Promise.all(
    benefactors.map(async (benefactor) => {
      return await userService.getData(benefactor);
    })
  );
  return data;
};

const calculateIndividualShare = (amount: number, numOfbenefactor: number) => {
  return amount / numOfbenefactor;
};

export default {
  addTransaction,
  getTransaction,
};
