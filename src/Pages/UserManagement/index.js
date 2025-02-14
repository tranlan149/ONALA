import UserInfo from '../../Components/UserInfo';
import OrderList from '../../Components/OrderList';
import './style.css'
import iconUser from '../../image/iconUser.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function UserManagement() {
    const btnArr = [
        {
            content:'Thông tin cá nhân',
            id:'infoBtn',
            path:'info'
        },
        {
            content:'Đơn hàng của bạn',
            id:'orderListBtn',
            path:'purchase'
        }
    ]
    const [selectedBtn, setSelectedBtn] = useState(btnArr[0].id)
    
    const handleSelect = (e) => {
        if(selectedBtn !== e.target.id){
            setSelectedBtn(e.target.id)
            
        }
        
    }
    
    
    return (
        <div className="managementContainer">
            <div className="sideBarManagement">
                <div className='userContain'>
                    <span id='userName'>
                        <img src={iconUser} alt='icon'/>
                        <p>user name</p>
                    </span>
                    {
                        btnArr.map((btnChild,index)=>(
                            <Link key={index} to={btnChild.path}>
                                <button 
                                    id={btnChild.id}
                                    className= {selectedBtn=== btnChild.id?'activeBtn':'btnUsertab'}
                                    onClick={(e)=> handleSelect(e)}
                                >{btnChild.content}
                                </button>                            
                            </Link>
                        ))
                    }
                    
                    

                </div>

            </div>
            <div className="contentManagement">
                {
                    selectedBtn==='infoBtn'?
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