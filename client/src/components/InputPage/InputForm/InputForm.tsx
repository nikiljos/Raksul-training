import "./InputForm.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import CheckBox from "../CheckBox/CheckBox";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type FormData = {
  spender: number;
  payment_of: string;
  amount: number;
  benefactor: Array<Number>;
  group: number;
};

type Member = {
  name: string;
  id: number;
};

function InputForm() {
  const { user, token } = useAppSelector((state) => state.auth);
  const queryClient = useQueryClient();

  const params = useParams();
  const initialValues: FormData = {
    spender: user.id!,
    payment_of: "",
    amount: 0,
    benefactor: [],
    group: Number(params.id),
  };

  const [formData, setFormData] = useState<FormData>(initialValues);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, spender: user.id! });
  }

  async function onSubmitHandler() {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/transaction/${params.id}/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          formData,
        }),
      }
    );
    return res.json();
  }

  const transactionMutation = useMutation(onSubmitHandler, {
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries(["getTransactionData"]);
        // setFormData(initialValues);
      }
    },
  });

  const getMembers = () =>
    user.id
      ? fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/group/members/${params.id}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => data.data)
      : [];

  const { data: memberList, status: listStatus } = useQuery(
    ["getMembers", user],
    getMembers
  );

  return (
    <form
      action="/"
      method="POST"
      className="create-group-form"
      onSubmit={(e) => {
        e.preventDefault();
        transactionMutation.mutate();
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
          {listStatus === "success"&&Array.isArray(memberList)
            ? memberList.map((member: Member) => {
                return (
                  <CheckBox
                    key={member.id}
                    formData={formData}
                    setFormData={setFormData}
                    benefactor_name={member.name}
                    benefactor_id={member.id}
                  />
                );
              })
            : "Loading..."}
        </div>
      </div>
      <button type="submit" className="get-started-btn">
        Add Payment
      </button>
    </form>
  );
}

export default InputForm;
