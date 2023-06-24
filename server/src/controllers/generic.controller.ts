import { Request, Response } from "express";
import genericService from "../services/generic.service";

const ping = async (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: "Pong",
    data: {
      time: genericService.getTimeString(),
    },
  });
};

const userCount = async (req: Request, res: Response) => {
  let count = await genericService.userCount();
  res.status(200).send({
    success: true,
    data: {
      count,
    },
  });
};

export default {
  ping,
  userCount,
};
