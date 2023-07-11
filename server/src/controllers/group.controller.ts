import { NextFunction, Request, Response } from "express";
import groupService from "../services/group.service";

const createGroup = async (req: Request, res: Response) => {
  const { groupName } = req.body;
  const admin = res.locals.user;
  const invite_code = groupService.generateInvitationCode();
  const group_data = await groupService.createGroup({
    name: groupName,
    admin,
    invite_code,
    members: [admin],
  });
  res.status(200).send({
    success: true,
    group_data,
    message: "Group created successfully",
  });
};

const joinGroup = async (req: Request, res: Response, next: NextFunction) => {
  const { groupName: invite_code } = req.body;
  const { user } = res.locals;
  const data = await groupService.joinGroup(invite_code, user);
  res.status(200).send({
    success: 200,
    data,
  });
};

// group id still vulnerable to IDOR,
// Need to fix group members table first
const getHistory = async (req: Request, res: Response) => {
  const admin = res.locals.user;
  const data = await groupService.getHistory(Number(admin));
  res.status(200).send({
    success: true,
    data,
  });
};

const getGroupCode = async (req: Request, res: Response) => {
  const invite_code = req.params.id;
  const data = await groupService.getGroupCode(invite_code);
  res.status(200).send({
    success: true,
    data,
  });
};

export default { createGroup, getHistory, joinGroup, getGroupCode };
