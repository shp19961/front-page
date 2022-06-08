import React, { useState } from 'react'

const Attendance = () => {

    const [PunchLog, setPunchLog] = useState({ UserId: "", LogTime: "", Type: "", InputType: "" })
    const { UserId, LogTime } = PunchLog
    const onInputChange = (e) => {
        setPunchLog({ ...PunchLog, [e.target.name]: e.target.value });
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log(PunchLog)
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <h1 className='py-4 text-center'>Attendance Management</h1>

                <div className='card p-4 col-md-6 col-10'>
                    <form onSubmit={onFormSubmit}>
                        <div className="mb-3">
                            <input onChange={onInputChange} type="text" name='UserId' value={UserId} className="form-control" id="user-id" placeholder='User ID' />
                        </div>
                        <div className="mb-3">
                            {/* <label htmlhtmlFor='date-time' className='form-label'>Select date & time</label> */}
                            <input onChange={onInputChange} type="datetime-local" name='LogTime' value={LogTime} className="form-control" id="date-time" />
                        </div>
                        <div className='mb-3'>
                            <select onChange={onInputChange} className="form-select" name='Type'>
                                <option value="">Select type</option>
                                <option value="CheckIn">CheckIn</option>
                                <option value="CheckOut">CheckOut</option>
                                <option value="OverTimeIn">OverTimeIn</option>
                                <option value="OverTimeOut">OverTimeOut</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <select onChange={onInputChange} className="form-select" name='InputType'>
                                <option value="">Select input type</option>
                                <option value="Fingerprint">Fingerprint</option>
                                <option value="Card">Card</option>
                                <option value="Password">Password</option>
                                <option value="Face">Face</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label>Face Mask</label>
                            <div className="form-check form-check-inline mx-3">
                                <input onChange={onInputChange} className="form-check-input" type="radio" name="FaceMask" id="inlineRadio1" value={true} />
                                <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input onChange={onInputChange} className="form-check-input" type="radio" name="FaceMask" id="inlineRadio2" value={false} />
                                <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                            </div>
                        </div>
                        <div className="text-center"><button type="submit" className="btn btn-primary rounded rounded-pill">Submit</button></div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Attendance