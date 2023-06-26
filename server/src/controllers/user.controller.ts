import { Request, Response } from "express";
import userService from "../services/user.service";

const getDetail = (req: Request, res: Response) => {
  userService.getDetail(res.locals.user).then((user) => {
    // console.log(user)
    const data = {
      id: user?.get("id"),
      name: user?.get("name"),
      email: user?.get("email"),
    };
    res.status(200).send({
        success:true,
        data
    });
  });
};

export default {
  getDetail,
};
