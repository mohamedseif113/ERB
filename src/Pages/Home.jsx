import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
    const HandleReplace=()=>{
        History.replace('/form')
    }
  return (
    <>
    

<div className="container home-page">

     <div className="row  justify-content-center w-100">
      <div className="col-lg-4 col-sm-12 ">
      <div className="home d-flex flex-column align-items-center mt-5 py-3 m-auto  justify-content-center">
        <img src='./images/images 1.png' className='mb-1' style={{width:"200px"}}/>
        
        <h6>نظام تسجيل الفائقين والفائقات 
        <br/>     العام الدراسي 2021/ 2022
        </h6>
        <NavLink className='w-100' to='/form'>
        <button onClick={HandleReplace} className='btn btn-primary w-100 mt-3 px-5 '>
          <span className='fs-4'> ابدء</span>
        </button>

        </NavLink>
      </div>
      </div>
     </div>
     </div>

    </>
  )
}

export default Home