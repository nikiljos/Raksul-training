import { Request, Response } from "express";
import groupService from "../services/group.service";

const createGroup = (req: Request, res: Response) => {
  const { groupName, admin } = req.body;
  const invite_code = groupService.generateInvitationCode();
  groupService.createGroup({ groupName, admin, invite_code });
  res.status(200).send({
    success: true,
    invite_code: invite_code,
    groupName,
    message: "Group created successfully",
  });
};

export default { createGroup };
