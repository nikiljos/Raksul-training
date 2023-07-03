import User from "../models/user.model";

const getDetail = (id: string) =>
  User.findOne({
    where: { id },
  });

const getUsername = async (id: string) => {
  const data: any = await getDetail(id);
  return data?.name.split(" ")[0];
};

export default {
  getDetail,
  getUsername,
};
