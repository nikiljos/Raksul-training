import "./CheckBox.css";

type Props = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  value: string;
};

type FormData = {
  spender: number;
  payment_of: string;
  amount: number;
  benefactors: Array<Number | String>;
};

function CheckBox({ formData, setFormData, value }: Props) {
  function handleOnCheck(e: React.ChangeEvent<HTMLInputElement>): void {
    const { checked, value } = e.target;
    if (!formData.benefactors.includes(value))
      setFormData({
        ...formData,
        benefactors: [...formData.benefactors, value],
      });
    else if (!checked)
      setFormData({
        ...formData,
        benefactors: formData.benefactors.filter((e) => {
          return e !== value;
        }),
      });
  }
  return (
    <div className="checkbox">
      <input
        onChange={(e) => {
          handleOnCheck(e);
        }}
        type="checkbox"
        name={value}
        id={value}
        value={value}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
}

export default CheckBox;
