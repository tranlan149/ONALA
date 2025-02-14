import './style.css'
import iconUser from '../../image/iconUser.svg'
function UserManagement() {
    return (
        <div className="managementContainer">
            <div className="sideBarManagement">
                <div className='userContain'>
                    <span>
                        
                    </span>
                    <img src={iconUser} alt='icon'/>
                    
                </div>

            </div>
            <div className="contentManagement">
                content
            </div>
        </div>
    );
}

export default UserManagement;