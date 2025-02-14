import UserInfo from '../../Components/UserInfo';
import OrderList from '../../Components/OrderList';
import './style.css'
import iconUser from '../../image/iconUser.svg'
import { useEffect, useState } from 'react';


function UserManagement() {
    const [selectedBtn, setSelectedBtn] = useState(true)
    let currentSelect = 'infoBtn'
    const handleSelect = (e) => {
        if(currentSelect != e.target.id)
        
        
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
                        className= {selectedBtn?'activeBtn':'btnUsertab'}
                        onClick={(e)=> handleSelect(e)}
                    >Thông tin cá nhân</button>
                    
                    <button
                        id='orderListBtn'
                        className={selectedBtn?'activeBtn':'btnUsertab'}
                        onClick={(e)=> handleSelect(e)}
                    >Đơn hàng của bạn</button>
                    

                </div>

            </div>
            <div className="contentManagement">
                {
                    currentSelect==='infoBtn'?
                    <UserInfo
                        name='hhahaha'
                        phone = '0192929938'
                        email= 'nt@gmail.com'
                        address = 'hanoi'
                    />:<OrderList/>
                }

            </div>
        </div>
    );
}

export default UserManagement;