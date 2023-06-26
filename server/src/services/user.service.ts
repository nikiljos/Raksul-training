import User from "../models/user.model";

const getDetail = (id: string) =>
  User.findOne({
    where: { id },
  });

export default {
  getDetail,
};
