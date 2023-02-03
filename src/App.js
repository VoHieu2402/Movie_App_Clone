import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import HomeIndex from './pages/HomePages/HomeIndex';
import LogIn from './pages/SignUp/LogIn';
import SignUp from './pages/SignUp/SignUp';
import DetailMovie from './pages/Detail/DetailMovie';
import Booking from './pages/Booking/Booking';
import PersonalProfile from './pages/PersonalProfile/PersonalProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeTemplate />}>
            <Route index element={<HomeIndex />} />
            <Route path='detail/:id' element={<DetailMovie />} />
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="booking/:maLichChieu/:giaVe" element={<Booking />} />
            <Route path="my-profile" element={<PersonalProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
