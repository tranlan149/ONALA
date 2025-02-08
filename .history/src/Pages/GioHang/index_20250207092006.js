import CartEmpty from '../../Components/CartEmpty';
import Li
import './style.css'
function GioHang(){
    const isEmpty= false;
    return(
        <>
            <div className='cartBody'>
                <div className="titleCart">GIỎ HÀNG CỦA TÔI</div>
                <div className='cartContainer'>
                    {isEmpty?<CartEmpty/>:null}
                </div>
            </div>
        </>
    )
}
export default GioHang;