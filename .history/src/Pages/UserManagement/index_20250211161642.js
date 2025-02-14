import './style.css'
import iconUser from '../../image/iconUser.svg'
import { Link } from 'react-router-dom';
import clsx from 'clsx';
function UserManagement() {
    return (
        <div className="managementContainer">
            <div className="sideBarManagement">
                <div className='userContain'>
                    <span id='userName'>
                        <img src={iconUser} alt='icon'/>
                        user name
                    </span>
                    <button className={clsx(btn)}>Thông tin cá nhân</button>
                    
                    <button>Đơn hàng của bạn</button>
                    

                </div>

            </div>
            <div className="contentManagement">
                content
            </div>
        </div>
    );
}

export default UserManagement;