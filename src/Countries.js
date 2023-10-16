import React, { useEffect, useState } from 'react'
import './Countries.css'

function Countries() {
    const [cont,setCont]=useState([])
    const [inp,setInp]=useState("")
    async function handleget(){
        const res=await fetch("https://restcountries.com/v3.1/all")
        const r= await res.json()
        console.log(r)
        setCont(r)
    }
    useEffect(()=>{
        handleget()
    },[])
  return (
    <div>
     <center>
      <h1 style={{backgroundColor:'gray', color:'brown'}}>Countries</h1>
      <input className='in' onChange={(e)=>{setInp(e.target.value)}}></input>
      <br />
     </center>
      <div className='d'>
        {cont.filter((es)=>es.name.common.toLowerCase().includes(inp)).map((e)=><div className='box'>
            <img src={e.flags.png} alt='Unable to load image..'></img>
            <p>Name :{e.name.common}</p>
            <p>Capital :{e.capital}</p>
            <p>population :{e.population}</p>
            <p>region :{e.region}</p>
        </div>)}
      </div>
    </div>
  )
}

export default Countries