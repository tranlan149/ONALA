import { Checkbox } from 'antd';
import CartItem from '../CartItem';
import './style.css'
function ListCart() {
    
    return ( 
        <div className="listCart">
            <div className="listCartHead">
                <p className='text1' ><Checkbox style={{marginRight:'40px'}}></Checkbox> Sản phẩm </p>
                <p >Đơn giá</p>
                <p >Số lượng</p>
                <p >Số tiền</p>
                <p>Thao tác</p>
            </div>
            <div className="listCartBody">
                <CartItem/>
            </div>
        </div>
    );
}

export default ListCart;