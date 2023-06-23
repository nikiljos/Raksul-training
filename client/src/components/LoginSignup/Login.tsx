import "./LoginSignup.css";
import { GoogleLogin } from "@react-oauth/google";
function Login() {
  const handleGoogleLoginSuccess = (tokenId: any) => {
    // Send the Google ID token to the backend for verification
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/auth/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokenId: tokenId }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend, e.g., set user state, store token in local storage, etc.
        console.log("Message:", data);
      });
    //   .catch((error) => {
    //     console.error("Backend request failed:", error);
    //   });
  };
  return (
    <div className="login-container">
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default Login;
