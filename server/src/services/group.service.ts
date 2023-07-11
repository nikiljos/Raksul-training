import Group from "../models/group.model";
import User from "../models/user.model";
// import uniqid from "uniqid";
var uniqid = require("uniqid");

type group_data = {
  [key: string]: any;
};

type groupData = {
  name: string | null;
  admin: number;
  invite_code: string;
  members: string[];
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
      if (!memList.find((elt) => elt === user)) {
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
  return await Group.findAll({
    where: { admin },
    order: [["createdAt", "DESC"]],
  });
};

const getGroupCode = async (invite_code: string) => {
  return await Group.findOne({
    where: { invite_code },
  });
};

const getMemberList = async (groupId: number) => {
  try {
    let memberIds = await Group.findOne({
      where: {
        id: groupId,
      },
    }).then((res) => {
      let members = res?.get("members");
      return members && Array.isArray(members) ? members : [];
    });
    let members=await Promise.all(memberIds.map((user) => 
      User.findOne({
        where:{
          id:user
        }
      })
      .then(data=>{
        console.log(data?.dataValues)
        return {
          id: data?.get("id"),
          name: data?.get("name"),
          email:data?.get("email")
        }
      })
    ));
    return members
  } catch (err) {
    throw err;
  }
};

export default {
  createGroup,
  joinGroup,
  generateInvitationCode,
  getHistory,
  getGroupCode,
  getMemberList
};
