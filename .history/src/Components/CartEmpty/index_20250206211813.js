import cartEmpty from '../../image/cartEmpty.png'
import 
function CartEmpty() {
    return ( 
        <>
            <div className='cartEmptyBody'>
                <img src= {cartEmpty} alt='cartEmpty' style={{width:'80%'}}/>
                <p>GIỎ HÀNG CỦA BẠN 
                    ĐANG TRỐNG
                    HÃY ĐẶT MÓN NGAY!</p>
            </div>
        </>
    );
}

export default CartEmpty;