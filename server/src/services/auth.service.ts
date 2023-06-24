import User from "../models/user.model";
import jwtUtils from "../utils/jwtUtils";

const getAuthToken = async (payload: any) => {
  const { email, name, picture } = payload;

  // Create the user if it doesn't exist
  await createUserIfNotExists(email, name, picture || null);

  // Generate a JWT
  const token: string = jwtUtils.signToken(payload);
  return token;
};

async function createUserIfNotExists(
  email: string,
  name: string,
  profileURL: string | null
) {
  const userExists = await User.findOne({ where: { email } });
  if (!userExists) {
    try {
      await User.create({
        email,
        name,
        profileURL,
      });
    } catch (error) {
      throw new Error("Error creating user");
    }
  }
}

export default {
  getAuthToken,
};
