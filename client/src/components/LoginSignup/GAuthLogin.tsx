import { GoogleLogin } from "@react-oauth/google";

function GAuthLogin() {
  const handleGoogleLoginSuccess = (tokenId: any) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/auth/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokenId: tokenId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          localStorage.setItem("access_token", data.data.authToken);
        }
        console.log("Message:", data);
      })
      .catch((error) => {
        console.error("Backend request failed:", error);
      });
  };
  return (
    <GoogleLogin
      onSuccess={handleGoogleLoginSuccess}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}

export default GAuthLogin;
