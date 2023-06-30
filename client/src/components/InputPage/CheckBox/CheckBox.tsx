import "./CheckBox.css";

type Props = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  benefactor_name: string;
  benefactor_id: number;
};

type FormData = {
  spender: number;
  payment_of: string;
  amount: number;
  benefactor: Array<Number>;
  group: number;
};

function CheckBox({
  formData,
  setFormData,
  benefactor_id,
  benefactor_name,
}: Props) {
  function handleOnCheck(e: React.ChangeEvent<HTMLInputElement>): void {
    const { checked, value } = e.target;
    if (!formData.benefactor.includes(Number(value)))
      setFormData({
        ...formData,
        benefactor: [...formData.benefactor, Number(value)],
      });
    else if (!checked)
      setFormData({
        ...formData,
        benefactor: formData.benefactor.filter((e) => {
          return e !== Number(value);
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
        name={benefactor_name}
        id={benefactor_name}
        value={benefactor_id}
      />
      <label htmlFor={benefactor_name}>{benefactor_name}</label>
    </div>
  );
}

export default CheckBox;
