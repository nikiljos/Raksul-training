import User from "../models/user.model";

const getTimeString = () => {
  return new Date().toString();
};

const userCount = () => User.count();

export default {
  getTimeString,
  userCount,
};
