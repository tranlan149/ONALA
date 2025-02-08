import { Checkbox } from 'antd';
import CartItem from '../CartItem';
import './style.css'
import { useState } from 'react';
function ListCart() {

    const[isChecked, setChecked] = useState(false)
    const hanldeChecked = (e) => {
        setChecked(e.target.checked)
    }
    
    return ( 
        <div className="listCart">
            <div className="listCartHead">
                <p className='text1' >
                    <Checkbox 
                        style={{marginRight:'40px'}}
                        checked = {isChecked}
                        onChange = {hanldeChecked}
                    >
                    </Checkbox> 
                    Sản phẩm </p>
                <p >Đơn giá</p>
                <p >Số lượng</p>
                <p >Số tiền</p>
                <p>Thao tác</p>
            </div>
            <div className="listCartBody">
                <CartItem 
                    isChecked={isChecked}
                    name=''
                    cost = '10003'
                    imageURL=''
                />
                
            </div>
        </div>
    );
}

export default ListCart;