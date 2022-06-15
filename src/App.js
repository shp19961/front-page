import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/1.Navbar/Navbar';
import Home from './components/2.Home/Home';
import Attendance from './components/3.AttendanceManagement/Attendance';
import Leave from './components/4.LeaveManagement/Leave';
import Timesheet from './components/5.TimeSheet/Timesheet';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer autoClose={1800} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/attendance-management' element={<Attendance />} />
          <Route path='/leave-management' element={<Leave />} />
          <Route path='/time-sheet' element={<Timesheet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
