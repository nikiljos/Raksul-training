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

const getHistory = async (req: Request, res: Response) => {
  const admin = res.locals.user;
  const data = await groupService.getHistory(Number(admin));
  res.status(200).send({
    success: true,
    data,
  });
};

// TODO: Group ID IDOR fix
const getMembers = async (req: Request, res: Response) => {
  const group_id = req.params.group_id;
  const data = await groupService.getMembers(Number(group_id));
  res.status(200).send({
    success: true,
    data,
  });
};

const deleteGroup = async (req: Request, res: Response) => {
  const group_id = req.params.group_id;
  const admin = res.locals.user;
  const data = await groupService.deleteGroup(Number(group_id), Number(admin));
  res.status(data.status).send({
    success: data.success,
    message: data.message,
  });
};

export default { createGroup, getHistory, joinGroup, getMembers, deleteGroup };
