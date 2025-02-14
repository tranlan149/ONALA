import './style.css'
import iconUser from '../../image/iconUser.svg'
import { Link } from 'react-router-dom';
function UserManagement() {
    return (
        <div className="managementContainer">
            <div className="sideBarManagement">
                <div className='userContain'>
                    <span id='userName'>
                        <img src={iconUser} alt='icon'/>
                        user name
                    </span>
                    <button>Thông tin cá nhân</button>
                    
                        <button>Thông tin cá nhân</button>

                </div>

            </div>
            <div className="contentManagement">
                content
            </div>
        </div>
    );
}

export default UserManagement;