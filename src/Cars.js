import React from 'react'
import './Cars.css'
//import About from './About'
import { Link } from 'react-router-dom'


function Cars() {
  return (
    <>
      <center><h1>UPSC SERVICES</h1></center>
      <div className='con1'>
          <Link to={"/About"}>        
            <div className='con2'>
              
            </div>
          </Link>
          <center><div>IAS</div></center>
          <Link to={"/Home"}>
            <div className='con3'>
            
            </div>
          </Link>
          <Link to={"/Home"}>
            <div className='con4'>
            
            </div>
          </Link>
          <Link to={"/Home"}>
            <div className='con5'>
            
            </div>
          </Link>
          <Link to={"/Home"}>
            <div className='con6'>
            
            </div>
          </Link>
          <Link to={"/Home"}>
            <div className='con7'>
            
            </div>
          </Link>
          <Link to={"/Home"}>
            <div className='con8'>
            
            </div>
          </Link>
          <Link to={"/Home"}>
            <div className='con9'>
            
            </div>
          </Link>
          <Link to={"/Home"}>
            <div className='con10'>
            
            </div>
          </Link>
          <Link to={"/Home"}>
            <div className='con11'>
            
            </div>
          </Link>
      </div>
    </>
  )
}

export default Cars
