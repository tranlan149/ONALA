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
        <>
        </>
        
    );
}

export default CartItem;