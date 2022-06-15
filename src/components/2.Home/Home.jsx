import React from 'react'
import { BsCalendarWeek, BsFillFileEarmarkSpreadsheetFill } from 'react-icons/bs'
import { IoMdFingerPrint } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container py-2">
            <h1 className='text-center py-md-5 py-3'>Welcome Username !</h1>
            <div className="row py-md-4 py-3 justify-content-center">

                <div className='col-lg-3 col-md-4 col-12 d-flex justify-content-center'>
                    <NavLink to="attendance-management">
                        <button className='btn btn-outline-primary ams-btn'><IoMdFingerPrint size={42} className='mx-2 mb-1' />AMS</button>
                    </NavLink>
                </div>
                <div className='col-lg-4 col-md-4 col-12 mt-4 mt-md-0  d-flex justify-content-center'>
                    <NavLink to="leave-management">
                        <button className='btn btn-outline-danger lms-btn'><BsCalendarWeek size={38} className='mx-3 mb-2' />LMS</button>
                    </NavLink>
                </div>
                <div className='col-lg-3 col-md-4 col-12 mt-4 mt-md-0  d-flex justify-content-center'>
                    <NavLink to="time-sheet">
                        <button className='btn btn-outline-success timesheet-btn'><BsFillFileEarmarkSpreadsheetFill size={38} className='mx-2 mb-2' />Timesheet</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home