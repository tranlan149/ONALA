import './style.css'
import { Checkbox } from "antd";
import ca from '../../image/ca.png'
import { useState } from 'react';
function CartItem() {
    
    const[count, setCount] = useState(1)
    const handleIncrease = ( ) => {
        setCount(count+1)
    }
    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
        
    };

    return ( 
        <div style={{position:'relative'}}>
            <div className="cartItem">
                <div className="item1"> 
                    <Checkbox style={{marginRight:'40px'}}></Checkbox>
                    <img width='150px' height='150px' src={ca}/>
                    <div className="itemNote">
                        <p >TRÀ ĐÀO CAM XẢDHHDHDHDHDHHDHDHDHSHHSHSHSHSHSHSH</p>
                        <button className='btnNote'>Ghi chú</button>
                    </div>
                </div>
                
                <div className="item2">
                    29.000 Đ
                </div>
                <div className="item3">
                    <button className='btn_count' onClick={handleDecrease} >-</button>
                    <p className='text_count'>{count}</p>
                    <button className='btn_count' onClick={handleIncrease} >+</button>
                </div>
                <div className="item4">
                    29.000Đ
                </div>
                <div className="item5">
                    <p>Xóa</p>
                    <p>Sản phẩm tương tự</p>
                </div>
            
            </div>


        </div>
        
    );
}

export default CartItem;