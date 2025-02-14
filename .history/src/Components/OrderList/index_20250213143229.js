
import { Link } from "react-router-dom";
import OrderItem from "../OrderItem";

function OrderList() {
    const statusOrder = [
        {
            type: 1,
            status: 'Đã Hoàn Thành'
        },
        {
            type: 2,
            status: 'Chờ Thanh Toán'
        },
        {
            type: 3,
            status: 'Đang Giao Hàng'
        },
        {
            type: 4,
            status: 'Hủy/ Hoàn Tiền'
        },
    ]
    return ( 
        <div>
            <h2>ĐƠN HÀNG CỦA BẠN</h2>
            <div className="navOrderStatus"> 
                {
                    
                }

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