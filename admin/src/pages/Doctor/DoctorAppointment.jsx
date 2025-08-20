import React, {useContext, useEffect} from 'react'
import {DoctorContext} from "../../context/DoctorContext.jsx";
import {AdminContext} from "../../context/AdminContext.jsx";
import {AppContext} from "../../context/AppContext.jsx";
import {assets} from "../../assets/assets_admin/assets.js";

const DoctorAppointment = () => {

    const {dToken, appointments, getAppointments, cancelAppointment, completeAppointment} = useContext(DoctorContext);
    const {calcAge, slotDateFormat, currency} = useContext(AppContext)


    useEffect(() => {
        if (dToken) {
            getAppointments();
        }
    }, [dToken]);

    return (
        <div className='w-full max-w-6xl m-5'>
            <p className='mb-3 text-lg font-medium'> Appointments</p>
            <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
                <div
                    className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
                    <p>#</p>
                    <p>Patient</p>
                    <p>Payment</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Fee</p>
                    <p>Action</p>
                </div>
                {
                    appointments.map((item, index) => (
                        <div
                            className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50'
                            key={index}>
                            <p className='max-sm:hidden'>{index + 1}</p>
                            <div className='flex items-center gap-2 mt-2 text-sm'>
                                <img className='w-16 rounded-full' src={item.userData.image} alt=""/>
                                <p>{item.userData.name}</p>
                            </div>
                            <div>
                                <p className='max-sm:hidden'>{item.payment ? "Online" : "Cash"}</p>
                            </div>
                            <p className='max-sm:hidden'>{calcAge(item.userData.dob)}</p>
                            <p className='max-sm:hidden'>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
                            <p className='max-sm:hidden'>{currency}{item.amount}</p>
                            {item.cancelled ?
                                <p>Cancelled</p>
                                : item.isCompleted
                                    ? <p>Completed</p>
                                    :
                                    <div>
                                <img className='cursor-pointer' onClick={() => cancelAppointment(item._id)}
                                     src={assets.cancel_icon} alt=""/>
                                <img className='cursor-pointer' onClick={()=>completeAppointment(item._id)}
                                     src={assets.tick_icon} alt=""/> </div>}
            </div>
            ))
            }
        </div>
</div>
)
}
export default DoctorAppointment
