type Props={
  name:string
}

function Person({name}:Props) {
  return (
    <div role="contentinfo">Person is {name}</div>
  )
}

export default Person