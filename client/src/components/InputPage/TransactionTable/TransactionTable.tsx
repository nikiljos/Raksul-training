import { useParams } from "react-router-dom";
import "./TransactionTable.css";
import TanstackTable from "./TanstackTable/TanstackTable";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../../../hooks";

export type Transaction = {
  spender: number;
  payment_of: string;
  amount: number;
  benefactor: Array<Number>;
  group: number;
};

function TransactionTable() {
  const params = useParams();

  const auth = useAppSelector((state) => state.auth);

  const fetchTransactionData = () =>
    auth.user.id
      ? fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/transaction/${params.id}/get`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${auth.token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => data.transaction_data)
      : [];

  const { data, status } = useQuery(
    ["getTransactionData", auth],
    fetchTransactionData
  );

  return (
    <div>
      {status === "success" ? (
        <TanstackTable transactionData={data as Transaction[]} />
      ) : (
        <h1 className="loading-text">Loading...</h1>
      )}
    </div>
  );
}

export default TransactionTable;
