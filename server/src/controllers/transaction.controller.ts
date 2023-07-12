import { Request, Response } from "express";
import transactionService from "../services/transaction.service";


const addTransaction = async (req: Request, res: Response) => {
  const { payment_of, amount, benefactor } = req.body.formData;
  const group=Number(res.locals.groupId)
  const spender = res.locals.user
  const group_data = await transactionService.addTransaction({
    spender,
    payment_of,
    amount,
    benefactor,
    group,
  });
  res.status(200).send({
    success: true,
    group_data,
    message: "Transaction created successfully",
  });
};

const getTransaction = async (req: Request, res: Response) => {
  const groupId: number = Number(res.locals.groupId);
  const transaction_data = await transactionService.getTransaction(groupId);
  res.status(200).send({
    success: true,
    transaction_data,
    message: "Transaction fetched successfully",
  });
};

export default {
  addTransaction,
  getTransaction,
};
