import React, { useState } from 'react'
export function Myapp1(p) {
  const [num,setNum]=useState(0);
  return (
    <div>
      {p.a}
    <p>count :{num} </p>
    <button onClick={()=>{setNum(num+1)}}>increment</button>
    <button onClick={()=>{setNum(num-1)}}>decrement</button>
    </div>
  )
}
