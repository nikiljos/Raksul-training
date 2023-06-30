import "./InputForm.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../../../hooks";
import CheckBox from "../CheckBox/CheckBox";
type FormData = {
  spender: number;
  payment_of: string;
  amount: number;
  benefactor: Array<Number>;
  group: number;
};

function InputForm() {
  const { user } = useAppSelector((state) => state.auth);
  const params = useParams();
  const initialValues: FormData = {
    spender: user.id!,
    payment_of: "",
    amount: 0,
    benefactor: [],
    group: Number(params.id),
  };

  const [formData, setFormData] = useState<FormData>(initialValues);
  console.log(formData);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (!formData.spender) setFormData({ ...formData, spender: user.id! });
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function onSubmitHandler() {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/transaction/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
        }
        console.log("Message:", data);
      })
      .catch((error) => {
        console.error("Backend request failed:", error);
      });
  }
  return (
    <form
      action="/"
      method="POST"
      className="create-group-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler();
      }}
    >
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
          <CheckBox
            formData={formData}
            setFormData={setFormData}
            benefactor_name="All"
            benefactor_id={4443224}
          />
          <CheckBox
            formData={formData}
            setFormData={setFormData}
            benefactor_name="Raju"
            benefactor_id={4431224}
          />
          <CheckBox
            formData={formData}
            setFormData={setFormData}
            benefactor_name="Nikhil"
            benefactor_id={4243224}
          />
          <CheckBox
            formData={formData}
            setFormData={setFormData}
            benefactor_name="Someone"
            benefactor_id={4436224}
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
