import { Request, Response } from "express";
import groupService from "../services/group.service";

const createGroup = async (req: Request, res: Response) => {
  const { groupName } = req.body;
  const admin=res.locals.user
  const invite_code = groupService.generateInvitationCode();
  const group_data = await groupService.createGroup({
    groupName,
    admin,
    invite_code,
  });
  res.status(200).send({
    success: true,
    group_data,
    message: "Group created successfully",
  });
};


// group id still vulnerable to IDOR, 
// Need to fix group members table first
const getHistory = async (req: Request, res: Response) => {
  const admin = res.locals.user
  const data = await groupService.getHistory(Number(admin));
  res.status(200).send({
    success: true,
    data,
  });
};

export default { createGroup, getHistory };
