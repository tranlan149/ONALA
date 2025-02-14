import UserInfo from '../../Components/UserInfo';
import OrderList from '../../Components/OrderList';
import './style.css'
import iconUser from '../../image/iconUser.svg'
import { useState } from 'react';


function UserManagement() {

    const [selectedBtn, setSelectedBtn] = useState('infoBtn');
    
    const handleSelect = (e) => {
        selectedBtn
    }

    
    
    return (
        <div className="managementContainer">
            <div className="sideBarManagement">
                <div className='userContain'>
                    <span id='userName'>
                        <img src={iconUser} alt='icon'/>
                        <p>user name</p>
                    </span>
                    <button 
                        id='infoBtn'
                        className= {}
                        onClick={(e)=> handleSelect(e)}
                    >Thông tin cá nhân</button>
                    
                    <button
                        id='orderListBtn'
                        className='btnUsertab'
                        onClick={(e)=> handleSelect(e)}
                    >Đơn hàng của bạn</button>
                    

                </div>

            </div>
            <div className="contentManagement">
                {/* <UserInfo
                    name='hhahaha'
                    phone = '0192929938'
                    email= 'nt@gmail.com'
                    address = 'hanoi'
                /> */}

                <OrderList/>
            </div>
        </div>
    );
}

export default UserManagement;