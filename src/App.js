import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/1.Navbar/Navbar';
import Home from './components/2.Home/Home';
import Attendance from './components/3.AttendanceManagement/Attendance';
import Leave from './components/4.LeaveManagement/Leave';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/attendance-management' element={<Attendance />} />
          <Route path='/leave-management' element={<Leave />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
