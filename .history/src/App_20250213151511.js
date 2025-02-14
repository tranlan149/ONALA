import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import BestSeller from './Pages/BestSeller';
import ONALA from './Pages/ONALA';
import Sale from './Pages/Sale';
import Recommend from './Pages/Recommend';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Order from './Pages/Order';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import AccountPage from './Pages/Account';
import UserInfo from './Components/UserInfo';
function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/bestseller' element={<BestSeller/>} />
            <Route path='/account' element={<AccountPage/>}>
              <Route path='info' element = {<UserInfo/>}/>
            </Route> 
            <Route path='/recommend' element={<Recommend/>} />
            <Route path='/order' element={<Order/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/onala' element={<ONALA/>} />
            <Route path='sale' element={<Sale/>} />
            <Route path= 'register' element = {<Register/>}/>
            
          </Route>
         
           
        
        

      </Routes>
    </>
  );
}

export default App;