import { GoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "../../hooks";
import { setToken } from "./AuthSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function GAuthLogin() {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const handleGoogleLoginSuccess = async (tokenId: any) => {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/google`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tokenId: tokenId }),
      }
    );
    return res.json();
  };

  const authMutate = useMutation(handleGoogleLoginSuccess, {
    onSuccess: (data) => {
      if (data.success) {
        localStorage.setItem("access_token", data.data.authToken);
        dispatch(setToken(data.data.authToken));
        queryClient.invalidateQueries(["userDetail"]);
      }
    },
  });
  return (
    <GoogleLogin
      onSuccess={authMutate.mutate}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}

export default GAuthLogin;
