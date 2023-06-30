import Group from "../models/group.model";
// import uniqid from "uniqid";
var uniqid = require("uniqid");

type group_data = {
  [key: string]: any;
};

type groupData = {
  groupName: string | null;
  admin: number;
  invite_code: string;
};

const createGroup = async (groupData: groupData) => {
  const { groupName, admin, invite_code } = groupData;
  try {
    const group: group_data = await Group.create({
      name: groupName,
      admin,
      invite_code,
    });
    return group.dataValues;
  } catch (error) {
    console.log("error, ", error);
    throw new Error("Error creating group");
  }
};

const generateInvitationCode = () => {
  return uniqid.time().toUpperCase();
};

const getHistory = async (admin: number) => {
  return await Group.findAll({
    where: { admin },
    order: [["createdAt", "DESC"]],
  });
};

export default {
  createGroup,
  generateInvitationCode,
  getHistory,
};
