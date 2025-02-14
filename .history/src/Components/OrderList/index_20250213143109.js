
import { Link } from "react-router-dom";
import OrderItem from "../OrderItem";

function OrderList() {
    const statusOrder = [
        {
            type:
        }
    ]
    return ( 
        <div>
            <h2>ĐƠN HÀNG CỦA BẠN</h2>
            <div className="navOrderStatus"> 
                <Link to= 'type'>Đã Hoàn Thành</Link>
                <Link to='type'>Chờ Thanh Toán</Link>
                <Link>Đang Giao Hàng</Link>
                <Link>Hủy/ Hoàn Tiền</Link>

            </div>
            <div className="OrderListContainer">
                
                <div>
                    <OrderItem
                        imageURL=''
                        name = 'trà đào'
                        orderCode = 'A1292929'
                        cost = '19828727'
                    />
                </div>
            </div>
        </div>
    );
}

export default OrderList;