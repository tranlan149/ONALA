import UserInfo from '../../Components/UserInfo';
import OrderList from '../../Components/OrderList';
import './style.css'
import iconUser from '../../image/iconUser.svg'
import { useEffect, useState } from 'react';


function UserManagement() {
    const btnArr = [
        {
            content;''
        }
    ]
    const [selectedBtn, setSelectedBtn] = useState('infoBtn')
    const [isSelected, setIsSelected] = useState(false)
    
    const handleSelect = (e) => {
        if(selectedBtn !== e.target.id){
            setSelectedBtn(e.target.id)
            setIsSelected(!isSelected)
        }
        
        
    }
    console.log(selectedBtn)
        
    console.log(isSelected)
    
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
                        className= {isSelected?'activeBtn':'btnUsertab'}
                        onClick={(e)=> handleSelect(e)}
                    >Thông tin cá nhân</button>
                    
                    <button
                        id='orderListBtn'
                        className={isSelected?'activeBtn':'btnUsertab'}
                        onClick={(e)=> handleSelect(e)}
                    >Đơn hàng của bạn</button>
                    

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