import { Checkbox } from 'antd';
import './style.css'
function ListCart() {
    return ( 
        <div className="listCart">
            <div className="listCartHead">
                <Checkbox className='text1' style={{fontSize}}>Sản phẩm</Checkbox> 
                <p >Đơn giá</p>
                <p >Số lượng</p>
                <p >Số tiền</p>
                <p>Thao tác</p>
            </div>
            <div className="listCartBody">

            </div>
        </div>
    );
}

export default ListCart;