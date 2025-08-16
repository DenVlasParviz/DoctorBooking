import React, {useContext, useState} from 'react'
import axios from 'axios'
import {AdminContext} from "../context/AdminContext.jsx";
import {toast} from "react-toastify";
const Login = () => {
    const [state, setState] = useState('Admin')
    const {setAtoken,backendUrl} = useContext(AdminContext)

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState()

    const onSubmitHandler = async(event) =>{
event.preventDefault();
try{

    if(state === 'Admin'){ //backendurl + api/admin/login
        const {data} = await axios.post(`${backendUrl}/api/admin/login`,{email,password})
        if(data.success){
            localStorage.setItem('aToken',data.token)
                setAtoken(data.token)
        }else{
            console.log(data.message)
            toast.error(data.message)
        }
    }
}catch(error){ console.log(error)}
    }

    return (

        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div
                className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
                <p className='text-2xl font-semibold m-auto'><span className='text-primary'>{state}</span> Login</p>
                <div className='w-full '>
                    <p>Email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required/>
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required/>
                </div>
                <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
                {
                    state === 'Admin' ? <p>Doctor login <span className='text-primary cursor-pointer' onClick={() => setState('Doctor')}>click here</span></p> :
                        <p>Admin login <span className='text-primary cursor-pointer' onClick={() => setState('Admin')}>click here</span></p>
                }
            </div>
        </form>
    )
}
export default Login
