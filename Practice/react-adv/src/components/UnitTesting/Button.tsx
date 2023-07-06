type Props={
    onClick:jest.Mock<any, any>;
}
function Button({onClick}:Props) {
  return (
    <div onClick={onClick}>Button</div>
  )
}

export default Button