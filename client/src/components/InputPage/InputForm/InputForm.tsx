import "./InputForm.css";
import { useState } from "react";

import { useAppSelector } from "../../../hooks";
import CheckBox from "../CheckBox/CheckBox";
type FormData = {
  spender: number;
  payment_of: string;
  amount: number;
  benefactors: Array<Number | String>;
};

function InputForm() {
  const { user } = useAppSelector((state) => state.auth);

  const initialValues: FormData = {
    spender: user.id!,
    payment_of: "",
    amount: 0,
    benefactors: [],
  };
  const [formData, setFormData] = useState<FormData>(initialValues);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <form action="/" method="POST" className="create-group-form">
      <div className="form-item">
        <label htmlFor="payment_of">Payment Of...</label>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          type="text"
          name="payment_of"
          id="payment_of"
          value={formData?.payment_of}
          placeholder={"Flight tickets"}
        />
      </div>
      <div className="form-item">
        <label htmlFor="amount">Amount</label>
        <div className="amount-box">
          <div className="amt-symbol">Rs.</div>
          <input
            onChange={(e) => {
              onChangeHandler(e);
            }}
            type="number"
            className="amt-input"
            name="amount"
            id="amount"
            value={formData?.amount}
            placeholder={"10,000"}
          />
        </div>
      </div>
      <div className="form-item check-box-container">
        <label>Paid for...</label>
        <div className="cb-box">
          <CheckBox formData={formData} setFormData={setFormData} value="All" />
          <CheckBox
            formData={formData}
            setFormData={setFormData}
            value="Raju"
          />
          <CheckBox
            formData={formData}
            setFormData={setFormData}
            value="Nikhil"
          />
          <CheckBox
            formData={formData}
            setFormData={setFormData}
            value="Someone"
          />
        </div>
      </div>
      <button type="submit" className="get-started-btn">
        Add Payment
      </button>
    </form>
  );
}

export default InputForm;
