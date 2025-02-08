import './style.css'
import { Checkbox } from "antd";
import ca from '../../image/ca.png'
import { useState } from 'react';
function CartItem() {
    
    const[count, setCount] = useState(1)
    const handleIncrease = ( ) => {

    }
    const handleDecrease = () => {

    }

    return ( 
        <div className="cartItem">
            <div className="item1"> 
                <Checkbox style={{marginRight:'40px'}}></Checkbox>
                <img width='150px' height='150px' src={ca}/>
                <div className="itemNote">
                    <p>Name</p>
                    <button className='btnNote'>Ghi chú</button>
                </div>
            </div>
            
            <div className="item2">
                cost
            </div>
            <div className="item3">
                
                <p className='text_count'>{count}</p>
                <button >-</button>
                <button onClick={handleIncrease} >+</button>
            </div>
            <div className="item4">
                thành tiền
            </div>
            <div className="item5">
                Thao tác
            </div>
        </div>
    );
}

export default CartItem;