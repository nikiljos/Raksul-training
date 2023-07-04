import InputForm from "./InputForm/InputForm";
import "./InputPage.css";
import TransactionTable from "./TransactionTable/TransactionTable";

function InputPage() {
  return (
    <div className="input-container">
      <div className="input-left">
        <InputForm />
      </div>
      <div className="input-right">
        <TransactionTable />
      </div>
    </div>
  );
}

export default InputPage;
