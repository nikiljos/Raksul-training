import { useParams } from "react-router-dom";
import "./TransactionTable.css";
import { useEffect, useState } from "react";
import TanstackTable from "./TanstackTable/TanstackTable";

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

  useEffect(() => {
    const getTransactions = async (groupId: number = Number(params.id)) => {
      await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/transaction/get/${groupId}`
      )
        .then((res) => res.json())
        .then((data) => {
          setTransactionData(data.transaction_data);
          setIsLoaded(true);
        });
    };

    getTransactions();
  }, [params]);

  return (
    <div>
      {isLoaded && (
        <TanstackTable transactionData={transactionData as Transaction[]} />
      )}
    </div>
  );
}

export default TransactionTable;
