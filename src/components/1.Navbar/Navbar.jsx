import React from 'react'
import { NavLink } from 'react-router-dom'
import { ImHome } from 'react-icons/im'
import { BsCalendarWeek, BsFillFileEarmarkSpreadsheetFill } from 'react-icons/bs'
import { IoMdFingerPrint } from 'react-icons/io'
import { AiOutlineLogout } from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <span className="navbar-brand mx-lg-4" href="#">ALMS</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-lg-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link mx-lg-1" aria-current="page" to="/"><ImHome size={21} /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mx-lg-1" aria-current="page" to="/attendance-management"><IoMdFingerPrint size={22} /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mx-lg-1" aria-current="page" to="/leave-management"><BsCalendarWeek size={21} /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mx-lg-1" aria-current="page" to="/time-sheet"><BsFillFileEarmarkSpreadsheetFill size={21} /></NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-lg-1" aria-current="page" href="#"><AiOutlineLogout size={21} /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-lg-2" aria-current="page" href="#">Hello, user!</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar