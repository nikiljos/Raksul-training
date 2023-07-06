import React from 'react'

type Props={
    names:string[],
}
function ItemList({names}:Props) {
  return (
    <div>{
        names.map(
            (e,i)=>{
                return <p key={i} role='name'>{e}</p>
            }
        )
        }</div>
  )
}

export default ItemList