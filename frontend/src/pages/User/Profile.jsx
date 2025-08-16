import React, {useState} from 'react'
import {assets} from "../../assets/assets_frontend/assets.js";

const Profile = () => {

  const [userData,setUserData ] = useState({
    name: 'name',
    image: assets.profile_pic,
    email:'email@gmail.com',
    phone:'+123332311',
    adress:'adress',
    gender:'male',
    dob:'idk '
  })

  const [isEdit, setIsEdit] = useState(false)

    return (
        <div className='max-w flex flex-col gap-2 text-sm'>
          <img className='w-36 rounded' src={userData.image} alt=""/>

          {
            isEdit ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev=>({...prev,name:e.target.value}))}/> : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
          }

          <hr className='bg-zinc-400 h-[1px] border-none'/>
          <div>
            <p className="text-neutral-500 underline mt-3" > Contact info</p>
            <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
              <p className='font-medium'> Email id:</p>
              <p className='text-blue-500'>{userData.email}</p>
              <p className='font-medium'>Phone:</p>
              <p>{userData.phone}</p>
              <p className='font-medium'>Adress</p>
              <p>{userData.adress}</p>
              <p className='font-medium'>Gender</p>
              <p>{userData.gender}</p>
              <p className='font-medium'>Date of birth</p>
              <p>{userData.dob}</p>
            </div>
          </div>
          <div className='mt-10'>
            {
              isEdit ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(false)}>Save</button> : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(true)}> Edit</button>
            }
          </div>

        </div>
    )
}
export default Profile
