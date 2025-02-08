import { Link } from 'react-router-dom';
import cartEmpty from '../../image/cartEmpty.png'
import './style.css'
function CartEmpty() {
    return ( 
        <>
            <div className='cartEmptyBody'>
                <img src= {cartEmpty} alt='cartEmpty' style={{width:'80%'}}/>
                <div className='cartEmptyContent'>
                    <p>
                        GIỎ HÀNG CỦA BẠN 
                    </p>
                    <p>
                        ĐANG TRỐNG
                    </p>
                    
                    HÃY ĐẶT MÓN NGAY!
                    
                    <Link>
                        <button
                    </Link>
                    </div>

            </div>
        </>
    );
}

export default CartEmpty;