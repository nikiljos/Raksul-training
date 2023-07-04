import Transaction from "../models/transaction.model";
import userService from "./user.service";

type Transaction = {
  spender: number;
  payment_of: string;
  amount: number;
  benefactor: Array<Number>;
  group: number;
};

const addTransaction = async (formData: Transaction) => {
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
  });

  return updateTransactions(transactions);
};

const updateTransactions = async (transactions: any) => {
  for (const transaction of transactions) {
    transaction.spender = await userService.getUsername(
      transaction.spender.toString()
    );

    const updatedTransactions = [];
    for (let benefactor of transaction.benefactor) {
      updatedTransactions.push(
        await userService.getUsername(benefactor.toString())
      );
    }
    transaction.benefactor = updatedTransactions;
  }
  return transactions;
};

const calculateIndividualShare = (amount: number, numOfbenefactor: number) => {
  return amount / numOfbenefactor;
};

export default {
  addTransaction,
  getTransaction,
};
