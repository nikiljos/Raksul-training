import { Request, Response } from "express";
import genericService from "../services/generic.service";
import { OAuth2Client } from "google-auth-library";

const CLIENT_ID = process.env.OAUTH_CID;

const ping = async (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: "Pong",
    data: {
      time: genericService.getTimeString(),
    },
  });
};
async function verifyToken(token: string): Promise<string | null> {
  const client = new OAuth2Client(CLIENT_ID);

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (payload) {
      const { email, name, picture } = payload;
      const profileUrl = picture || null;

      // Return the extracted data
      return JSON.stringify({ email, name, profileUrl });
    }
  } catch (error) {
    console.error("Error verifying token:", error);
  }

  return null;
}
const login = async (req: Request, res: Response) => {
  const token = req.body.tokenId.credential;

  verifyToken(token)
    .then((data) => {
      if (data) {
        console.log("Token verification successful");
        console.log(data);
        res.status(200).send({
          success: true,
          message: "Token verification successful",
          data: {
            data,
          },
        });
      } else {
        console.log("Token verification failed");
      }
    })
    .catch((error) => {
      console.error("Google authentication error:", error);
      res.status(500).json({ error: "Internal server error" });
    });
};

const userCount=async (req:Request,res:Response)=>{
    let count=await genericService.userCount()
    res.status(200).send({
        success:true,
        data:{
            count
        }
    })
}

export default {
    ping,
    userCount,
    login,
};
