import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import { toast } from 'react-toastify'

import AddForm from './AddForm'



const Increment = () => {
    return <AddForm />
}
const inials={
    name:"",
    password:"",
    confirmPassword:"",
    email:"",
    phone:"",
  
    
}
const Form = () => {
    const [list, setList] = useState([]);
    const [form,setForm]=useState(inials);
    const {name,email,phone,password,confirmPassword}=form;
    const history=useHistory()
    
    const Add = () => {
        setList([...list, <Increment />])
    };


     const handleData=(e)=>{
        const {value,name}=e.target;
        setForm({...form,[name]:value})

     }
   console.log(form)
    const HandleSubmit=(e)=>{
     e.preventDefault();
       if(name==="" ||password===""||email==="" ||phone===""||confirmPassword===""){

        toast.error("pleas enter all fields");

       }
       else{
        toast.success("you are registered successfull :)")
        setForm(inials);
         history.push("/success")
       }
    }

    

    
    return (
        <>
             <div className='bg-primary d-flex align-items-center  mb-3 justify-content-end py-1'>
                <NavLink  to='/'>
                <i class="fa-solid fa-chevron-left ps-3 mt-2 text-white "></i>

                </NavLink>
             </div>
            <div className="form m-auto col-md-4 px-3 py-0">
           
                <h2 className='text-primary text-center'>Signup</h2>
                <form onSubmit={HandleSubmit} className='my-4'>
                    <input name='name' value={name||""} onChange={handleData} type='text' className="py-3 form-control" placeHolder="name"  />
                    <input name='phone'  value={phone} onChange={handleData}  type='number' className="py-3 form-control mt-4" placeHolder="Phone Number" />
                    <input name='email' value={email||""} onChange={handleData} type='text' className="py-3 form-control mt-4" placeHolder="Email (optional)"  />
                    <input name='password' value={password||""} onChange={handleData} type='password' className="py-3 form-control mt-4" placeHolder="password" />

                    <input name='password' value={confirmPassword||""} onChange={handleData} type='password' className="py-3 form-control mt-4" placeHolder="Confirm Password" />

            
            


                    
                </form>
              
            </div>

            {list}
            

            <div className='text-center col-lg-4 col-sm-12 mt-4 m-auto'>
                     <button type='submit' className='btn btn-primary mt-3 w-100 px-5 '>Send</button>

            </div>
        
        

        </>
    )
}

export default Form
