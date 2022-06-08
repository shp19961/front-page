import React from 'react'
import { BsCalendarWeek } from 'react-icons/bs'
import { IoMdFingerPrint } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <h1 className='text-center py-4'>Welcome Username !</h1>
            <div className="row py-4 justify-content-center">

                <div className='col-lg-2 col-md-4 col-12 d-flex justify-content-center'>
                    <NavLink to="attendance-management">
                        <button className='btn btn-outline-primary ams-btn'><IoMdFingerPrint size={42} className='mx-2 mb-1' />AMS</button>
                    </NavLink>
                </div>
                <div className='col-lg-3 col-md-4 col-12 mt-4 mt-md-0  d-flex justify-content-center'>
                    <NavLink to="leave-management">
                        <button className='btn btn-outline-danger lms-btn'><BsCalendarWeek size={38} className='mx-3 mb-2' />LMS</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home