import { useParams } from "react-router-dom";
import "./TransactionTable.css";
import { useEffect, useState } from "react";
import TanstackTable from "./TanstackTable/TanstackTable";
import { useQuery } from "@tanstack/react-query";

export type Transaction = {
  spender: number;
  payment_of: string;
  amount: number;
  benefactor: Array<Number>;
  group: number;
};

function TransactionTable() {
  const params = useParams();
  const [transactionData, setTransactionData] = useState<Transaction[]>();
  const [isLoaded, setIsLoaded] = useState<Boolean>(false);

  const fetchTransactionData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/transaction/get/${params.id}`
    );
    return res.json();
  };

  const { data, status } = useQuery(
    ["getTransactionData"],
    fetchTransactionData
  );

  useEffect(() => {
    if (status === "success") {
      setTransactionData(data.transaction_data);
      setIsLoaded(true);
    }
  }, [status, data]);

  return (
    <div>
      {isLoaded ? (
        <TanstackTable transactionData={transactionData as Transaction[]} />
      ) : (
        <h1 className="loading-text">Loading...</h1>
      )}
    </div>
  );
}

export default TransactionTable;
