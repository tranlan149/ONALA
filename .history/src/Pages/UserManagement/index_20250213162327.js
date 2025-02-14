import UserInfo from '../../Components/UserInfo';
import OrderList from '../../Components/OrderList';
import './style.css'
import iconUser from '../../image/iconUser.svg'
import { useRef } from 'react';

function UserManagement() {

    let buttonRef = useRef(null)
    let currentSelect = 'infoBtn'
    const handleSelect = () => {
        currentSelect = buttonRef.current.id
    }
    console.log(currentSelect)
    return (
        <div className="managementContainer">
            <div className="sideBarManagement">
                <div className='userContain'>
                    <span id='userName'>
                        <img src={iconUser} alt='icon'/>
                        <p>user name</p>
                    </span>
                    <button 
                        ref={buttonRef}
                        id='infoBtn'
                        className='btnUsertab'
                        onClick={handleSelect}
                    >Thông tin cá nhân</button>
                    
                    <button
                        ref={buttonRef}
                        id='orderListBtn'
                        className='btnUsertab'
                        onClick={handleSelect}
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