import { Request, Response } from "express";
import authService from "../services/auth.service";
import { TokenPayload } from "google-auth-library";

interface AuthenticatedRequest extends Request {
  user?: TokenPayload;
}

const login = async (req: AuthenticatedRequest, res: Response) => {
  try {
    let authToken = await authService.getAuthToken(req.user!);

    if (!authToken) {
      return res
        .status(401)
        .json({ success: false, message: "Token verification failed" });
    }

    return res.status(200).json({
      success: true,
      message: "Token verification successful",
      data: { authToken },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export default {
  login,
};
