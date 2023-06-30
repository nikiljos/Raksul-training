import Transaction from "../models/transaction.model";

type FormData = {
  spender: number;
  payment_of: string;
  amount: number;
  benefactor: Array<Number>;
  group: number;
};

const addTransaction = async (fromData: FormData) => {
  const { spender, payment_of, amount, benefactor, group } = fromData;
  try {
    const individualShare = calculateIndividualShare(amount, benefactor.length);
    console.log(individualShare, fromData);
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
    console.log("error, ", error);
    throw new Error("Error adding transaction");
  }
};

const calculateIndividualShare = (amount: number, numOfbenefactor: number) => {
  return amount / numOfbenefactor;
};

export default {
  addTransaction,
};
