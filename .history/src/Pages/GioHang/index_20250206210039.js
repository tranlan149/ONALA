import CartEmpty from '../../Components/CartEmpty';
import './style.css'
function GioHang(){
    const isEmpty= true;
    return(
        <>
            <div className='cartBody'>
                <div className="titleCart">GIỎ HÀNG CỦA TÔI</div>
                <div className='cartContainer'>
                    {isEmpty?<CartEmpty/>:null
                </div>
            </div>
        </>
    )
}
export default GioHang;