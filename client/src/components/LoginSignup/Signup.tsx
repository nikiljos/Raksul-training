import "./LoginSignup.css";
import React, { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

type ErrorValues = {
  name?: string;
  email?: string;
  password?: string;
};
function Signup() {
  const initialValues: FormValues = {
    name: "",
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
    let errors: ErrorValues = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!values.name) {
      errors.name = "Name is required";
    }
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
      errors.password = "Passowrd must be 8 characters long and strong";
    }
    return errors;
  };

  useEffect(() => {
    console.log(Object.values(formErrors));
    if (Object.values(formErrors).length === 0 && isSubmit) {
      console.log("object");
    }
  }, [formErrors, isSubmit, formValues]);

  return (
    <div className="login-container">
      <h1 className="login-heading">
        <span className="yellow-text">Sign Up</span> to start
        <span className="yellow-text"> Splitting!</span>
      </h1>
      <form action="/" className="login-form" onSubmit={handleSubmit}>
        {Object.values(formErrors).length === 0 && isSubmit ? (
          <div className="success">Registration Successful</div>
        ) : (
          <></>
        )}
        <div className="form-item">
          <label htmlFor="name">Name*</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            placeholder="John Doe"
          />
        </div>
        <p>{formErrors.name}</p>
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
          Sign Up <img src="/images/arrow-right.svg" alt="" />
        </button>
      </form>
      <div className="dontHaveAccount">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default Signup;
