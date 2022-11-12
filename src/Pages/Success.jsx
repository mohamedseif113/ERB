import React from 'react'
import { NavLink } from 'react-router-dom'

const Success = () => {
  return (
    
    <div className="success pt-5 w-50 mx-auto text-center d-flex flex-column justify-content-center my-5 align-items-center">
        <img src='./images/correct 1 (1).png'/>
        <p className='text-muted mt-4 w-50'>[اسم المساهم ] تم استلام طلب تسجيل ابنائكم و بناتكم الفائقين و الفائقات بنجاح، سوف يتم مراجعة طلبكم من قبل الإدارة و التواصل معاكم قريباً</p>
   <NavLink to="/">
   <img style={{width:"80px"}} className="mt-4 pt-3" src='./images/images 1.png' />

   </NavLink>
   
    </div>
  )
}

export default Success