import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Hotel from './Pages/Hotel/Hotel';
import Login from './Pages/Login/login';
import Hotels from './Pages/Hotels_List/list';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/hotels/:id' element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;