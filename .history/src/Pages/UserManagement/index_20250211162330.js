import UserInfo from '../../Components/UserInfo';
import './style.css'
import iconUser from '../../image/iconUser.svg'

function UserManagement() {


    return (
        <div className="managementContainer">
            <div className="sideBarManagement">
                <div className='userContain'>
                    <span id='userName'>
                        <img src={iconUser} alt='icon'/>
                        user name
                    </span>
                    <button className='btnUsertab'>Thông tin cá nhân</button>
                    
                    <button className='btnUsertab'>Đơn hàng của bạn</button>
                    

                </div>

            </div>
            <div className="contentManagement">
                <Us
            </div>
        </div>
    );
}

export default UserManagement;