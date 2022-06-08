import React from 'react'

const Attendance = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <h1 className='py-4 text-center'>Attendance Management</h1>

                <div className='card p-4 col-md-6 col-10'>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="user-id" placeholder='User ID' />
                        </div>
                        <div className="mb-3">
                            {/* <label htmlhtmlFor='date-time' className='form-label'>Select date & time</label> */}
                            <input type="datetime-local" className="form-control" id="date-time" />
                        </div>
                        <div className='mb-3'>
                            <select className="form-select" aria-label="Default select example">
                                <option value="">Select type</option>
                                <option value="CheckIn">CheckIn</option>
                                <option value="CheckOut">CheckOut</option>
                                <option value="OverTimeIn">OverTimeIn</option>
                                <option value="OverTimeOut">OverTimeOut</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <select className="form-select" aria-label="Default select example">
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
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="yes" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="no" />
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