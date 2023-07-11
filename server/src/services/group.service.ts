import Group from "../models/group.model";
import { Op } from "sequelize";
var uniqid = require("uniqid");
import userService from "./user.service";

type group_data = {
  [key: string]: any;
};

type groupData = {
  name: string | null;
  admin: number;
  invite_code: string;
  members: string[];
};

type memberData = {
  name: string;
  id: number;
};

const createGroup = async (groupData: groupData) => {
  try {
    const group: group_data = await Group.create(groupData);
    return group.dataValues;
  } catch (error) {
    console.log("error, ", error);
    throw new Error("Error creating group");
  }
};

const joinGroup = async (invite_code: string, user: string) => {
  try {
    let group = await Group.findOne({
      where: {
        invite_code,
      },
    });
    if (group && group.get("invite_open")) {
      let members = group.get("members");
      let memList = Array.isArray(members) ? members : [];
      if (!memList.includes(user.toString())) {
        memList.push(user);
        group.set("members", memList);
        let res = await group.save();
        return res.dataValues;
      } else {
        throw new Error("Already Member");
      }
    } else {
      throw new Error("Invite Closed");
    }
  } catch (err) {
    throw err;
  }
};

const generateInvitationCode = () => {
  return uniqid.time().toUpperCase();
};

const getHistory = async (admin: number) => {
  try {
    return await Group.findAll({
      where: {
        members: {
          [Op.like]: `%${admin}%`,
        },
      },
      order: [["createdAt", "DESC"]],
    });
  } catch (error) {
    console.error("Error retrieving groups:", error);
    throw error;
  }
};

const getMembersInfo = async (members_list: string[]) => {
  const memberData: memberData[] = [];
  if (members_list.length > 1) {
    for (const id of members_list) {
      const name = await userService.getUsername(id);
      memberData.push({ name, id: Number(id) });
    }
    return memberData;
  }
};

const getMembers = async (group_id: number) => {
  try {
    const group = await Group.findOne({
      where: {
        id: group_id,
      },
    });

    if (!group) {
      throw new Error("No Members Found");
    }

    const members = group.get("members");
    const members_list = Array.isArray(members) ? members : [];
    const memberData = await getMembersInfo(members_list);

    return memberData;
  } catch (error) {
    console.error("Error retrieving groups:", error);
    throw error;
  }
};

export default {
  createGroup,
  joinGroup,
  generateInvitationCode,
  getHistory,
  getMembers,
};
