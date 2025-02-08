import CartEmpty from '../../Components/CartEmpty';
import ListCart from '../../Components/ListCart';
import './style.css'
function GioHang(){
    const isEmpty= false;
    return(
        <>
            <div className='cartBody'>
                <div className="titleCart">GIỎ HÀNG CỦA TÔI</div>
                <div className='cartContainer'>
                    {isEmpty?<CartEmpty/>:<ListCart/>}
                </div>
            </div>
        </>
    )
}
export default GioHang;