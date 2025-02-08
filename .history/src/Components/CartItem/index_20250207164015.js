import './style.css'
import { Checkbox } from "antd";
import ca from '../../image/ca.png'
import { useState } from 'react';
function CartItem() {
    
    const[count, setCount] = useState(1)
    const [isNote,setIsNote] = useState(false)
    const [note, setNote] = useState("")
    const handleIncrease = ( ) => {
        setCount(count+1)
    }
    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
        
    };

    const handleNote = () => {
        setIsNote(!isNote)
    }

    return ( 
        <div style={{marginBottom:'14px', backgroundColor:'white', width:'90%'}} >
            <div className="cartItem">
                <div className="item1"> 
                    <Checkbox style={{marginRight:'40px'}}></Checkbox>
                    <img width='150px' height='150px' src={ca}/>
                    <div className="itemNote">
                        <p >TRÀ ĐÀO CAM XẢDHHDHDHDHDHHDHDHDHSHHSHSHSHSHSHSH</p>
                        {
                            isNote?<button className='btnOK' onClick={handleNote}>OK</button>:
                            <button className='btnNote' onClick={handleNote}>Ghi chú</button>
                        }
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
            {
                isNote && <textarea rows="3" className='inputNote'/>
            }
            {
                !isNote && <div className='textNote'>ghi chú đây .ant-checkbox-checked .ant-checkbox-inner 
                    background-color: white !important; /* Nền trắng */
                    border-color: black !important; /* Viền đen */
                
                
                /* Mũi tên (dấu tích màu đen */
                .ant-checkbox-checked .ant-checkbox-inner::after 
                    border-color: black !important; /* Màu dấu tích */
                    width: 8px !important;
                    height: 14px !important;
                    
                </div>
            }

        </div>
        
    );
}

export default CartItem;