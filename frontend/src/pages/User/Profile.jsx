import React, {useContext, useState} from 'react'
import {AppContext} from "../../context/Context.jsx";
import {assets} from "../../assets/assets_frontend/assets.js";
import axios from "axios";
import {toast} from "react-toastify";

const Profile = () => {

  const {userData,setUserData,token,backendUrl,loadUserProfileData} = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)
    const [image, setImage] = useState()

    const updateUserProfile = async(req,res) =>{
try {
    const formData = new FormData();
    formData.append("name", userData.name);
  image && formData.append("image", image);
//тут скорее всего будет выдавать ошибку ибо я не передаю все значения (phone,address,dob и тд). Чтобы решить надо их добавить но мне лень вводить input type на сайте для каждого.
  const {data} = await axios.post(backendUrl + '/api/user/update-profile',formData,{headers:{token}})
    if (data.success){
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
    }else{
        toast.error(data.message)
    }


}catch(err){
    console.log(err)}
    }

    return userData && (
        <div className='max-w flex flex-col gap-2 text-sm'>
            {
                isEdit ? <label htmlFor="image">
                    <div className='inline-block relative cursor-pointer'>
                        <img className='w-36 rounded opacity-100' src={image ? URL.createObjectURL(image) : userData.image} alt=""/>
                        <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon} alt=""/>
                    </div>
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden/>
                </label> : <img className='w-36 rounded' src={userData.image} alt=""/>

            }

            {
                isEdit ?
                    <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev=>({...prev,name:e.target.value}))}/> : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
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
              isEdit ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={updateUserProfile}>Save</button> : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(true)}> Edit</button>
            }
          </div>

        </div>
    )
}
export default Profile
