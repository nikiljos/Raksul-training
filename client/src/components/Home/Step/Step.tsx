import "./Step.css";

type Props = {
  title: string;
  description: string;
};

function Step(props: Props) {
  return (
    <div className="single-step">
      <h3 className="step-title">{props.title}</h3>
      <div className="step-description">{props.description}</div>
    </div>
  );
}

export default Step;
