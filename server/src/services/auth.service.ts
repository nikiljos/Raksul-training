import User from "../models/user.model";
import jwtUtils from "../utils/jwtUtils";

const getAuthToken = async (payload: any) => {
  const { email, name, picture } = payload;

  // Create the user if it doesn't exist
  let user = await createUserIfNotExists(email, name, picture);
  const sub = user.get("id");
  // Generate a JWT
  const token: string = jwtUtils.signToken({ sub });
  return token;
};

async function createUserIfNotExists(
  email: string,
  name: string,
  profileURL: string | null
) {
  let user = await User.findOne({ where: { email } });
  if (!user) {
    try {
      user = await User.create({
        email,
        name,
        profileURL,
      });
    } catch (error) {
      throw new Error("Error creating user");
    }
  }
  return user;
}

export default {
  getAuthToken,
};
