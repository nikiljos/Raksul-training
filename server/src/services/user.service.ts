import User from "../models/user.model";

const getDetail = (id: string) =>
  User.findOne({
    where: { id },
  });

const getUsername = async (id: string) => {
  const data: any = await getDetail(id);
  return data?.name;
};

const getData = async (id: string) => {
  const data: any = await getDetail(id);
  return { name: data.get("name") as string, id: data.get("id") as number };
};

export default {
  getDetail,
  getUsername,
  getData,
};
