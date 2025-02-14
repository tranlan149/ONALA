import UserInfo from '../../Components/UserInfo';
import OrderList from '../../Components/OrderList';
import './style.css'
import iconUser from '../../image/iconUser.svg'
import { useEffect, useState } from 'react';

function UserManagement() {

    const [selectBtn, setSelectBtn] = useState(false)
    
    const handleSelect = () => {
        setSelectBtn(!selectBtn)
    }
    useEffect (,[selectBtn])
    return (
        <div className="managementContainer">
            <div className="sideBarManagement">
                <div className='userContain'>
                    <span id='userName'>
                        <img src={iconUser} alt='icon'/>
                        <p>user name</p>
                    </span>
                    <button 
                        onClick={}
                        className='btnUsertab'
                    >Thông tin cá nhân</button>
                    
                    <button className='btnUsertab'>Đơn hàng của bạn</button>
                    

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