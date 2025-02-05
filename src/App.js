import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import BestSeller from './Pages/BestSeller';
import DatHang from './Pages/DatHang';
import DangNhap from './Pages/DangNhap';
import GioHang from './Pages/GioHang';
import ONALA from './Pages/ONALA';
import Sale from './Pages/Sale';
import TrangChu from './Pages/TrangChu';
import GioiThieu from './Pages/GioiThieu';




function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<TrangChu/>} />
            <Route path='/bestseller' element={<BestSeller/>} />
            <Route path='/dangnhap' element={<DangNhap/>} />
            <Route path='/gioithieu' element={<GioiThieu/>} />
            <Route path='/dathang' element={<DatHang/>} />
            <Route path='/giohang' element={<GioHang/>} />
            <Route path='/onala' element={<ONALA/>} />
            <Route path='sale' element={<Sale/>} />
            
          </Route>
         
           
        
        

      </Routes>
    </>
  );
}

export default App;