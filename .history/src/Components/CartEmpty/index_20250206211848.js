import cartEmpty from '../../image/cartEmpty.png'
import './style.css'
function CartEmpty() {
    return ( 
        <>
            <div className='cartEmptyBody'>
                <img src= {cartEmpty} alt='cartEmpty' style={{width:'80%'}}/>
                <div>GIỎ HÀNG CỦA BẠN 
                    ĐANG TRỐNG
                    HÃY ĐẶT MÓN NGAY!</div>
            </div>
        </>
    );
}

export default CartEmpty;