import React, { FormEvent, useEffect, useState } from "react";
import "./LoginSignup.css";
import { Link } from "react-router-dom";
import GAuthLogin from "./GAuthLogin";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { unsetUser } from "./AuthSlice";
import { ToastContainer, toast } from "react-toastify";

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
    // setIsSubmit(true);
    toast.info("Currently Unavailable. Please sign in with Google instead.")
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

  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const logout = () => {
    localStorage.removeItem("access_token");
    dispatch(unsetUser());
  };

  useEffect(() => {
    if (Object.values(formErrors).length === 0 && isSubmit) {
      console.log("object");
    }
  }, [formErrors, isSubmit, formValues]);

  return !auth.token ? (
    <div className="login-container">
      <ToastContainer style={{fontSize:"1.3rem"}}/>
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
          Log In <img src="/images/arrow-right.svg" alt="" />
        </button>
        <div className="form-divider">
          <div className="dividing-line"></div>
          <div className="divider-txt"> or continue in with Google</div>
          <div className="dividing-line"></div>
        </div>
        {/* Google Login Button */}
        <div className="google-login-btn">
          <GAuthLogin />
        </div>
      </form>
      <div className="dontHaveAccount">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  ) : (
    <div className="flex-center">
      <Link to="/home" className="space">
        View Dashboard
      </Link>
      <button className="primary-btn full form-btn space" onClick={logout}>
        Log Out <img src="/images/arrow-right.svg" alt="" />
      </button>
    </div>
  );
}

export default Login;
