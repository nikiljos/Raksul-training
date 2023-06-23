import React, { FormEvent, useEffect, useState } from "react";
import "./LoginSignup.css";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

type FormValues = {
  email: string;
  password: string;
};

type ErrorValues = {
  email?: string;
  password?: string;
};

function Login() {
  const initialValues: FormValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [formErrors, setFormErrors] = useState<ErrorValues>({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values: FormValues) => {
    const errors: ErrorValues = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (
      values.password.length < 7 ||
      !passwordRegex.test(values.password)
    ) {
      errors.password = "Wrong password";
    }
    return errors;
  };

  useEffect(() => {
    console.log(Object.values(formErrors));
    if (Object.values(formErrors).length === 0 && isSubmit) {
      console.log("object");
    }
  }, [formErrors, isSubmit, formValues]);

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
        if (data) setIsSubmit(true);
        console.log("Message:", data);
      })
      .catch((error) => {
        console.error("Backend request failed:", error);
      });
  };
  return (
    <div className="login-container">
      <h1 className="login-heading">
        <span className="yellow-text">Log In</span> to start
        <span className="yellow-text"> Splitting!</span>
      </h1>
      <form action="/" className="login-form" onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="success">Logged In Successful</div>
        ) : (
          <></>
        )}
        <div className="form-item">
          <label htmlFor="email">Email*</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            placeholder="john@doe.com"
          />
        </div>
        <p>{formErrors.email}</p>
        <div className="form-item">
          <label htmlFor="password">Password*</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            placeholder="********"
          />
        </div>
        <p>{formErrors.password}</p>
        <button className="primary-btn full form-btn">
          Log In <img src="./images/arrow-right.svg" alt="" />
        </button>
        <div className="form-divider">
          <div className="dividing-line"></div>
          <div className="divider-txt"> or continue in with Google</div>
          <div className="dividing-line"></div>
        </div>
        {/* Google Login Button */}
        <div className="google-login-btn">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </form>
      <div className="dontHaveAccount">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
