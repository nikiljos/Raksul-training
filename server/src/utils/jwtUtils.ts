import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model";

dotenv.config(); // Load environment variables from .env file

const jwtUtils = {
  signToken: (payload: any): string => {
    const secretKey = process.env.SECRET_KEY as Secret;
    const token = jwt.sign(payload, secretKey);
    return token;
  },
  verifyToken: (token: string): any => {
    const secretKey = process.env.SECRET_KEY as Secret;
    const decodedToken = jwt.verify(token, secretKey);
    return decodedToken;
  },
};

export default jwtUtils;
