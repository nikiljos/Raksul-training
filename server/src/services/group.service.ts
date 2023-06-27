import Group from "../models/group.model";
// import uniqid from "uniqid";
var uniqid = require("uniqid");

const createGroup = async (groupData: {
  groupName: string | null;
  admin: number;
  invite_code: string;
}) => {
  const { groupName, admin, invite_code } = groupData;
  console.log(groupData);
  try {
    const group = await Group.create({ name: groupName, admin, invite_code });
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
