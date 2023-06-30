import { Request, Response } from "express";
import transactionService from "../services/transaction.service";

const addTransaction = async (req: Request, res: Response) => {
  const { spender, payment_of, amount, benefactor, group } = req.body.formData;
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
    message: "Group created successfully",
  });
};

export default {
  addTransaction,
};
