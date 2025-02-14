
import { Link, useSearchParams } from "react-router-dom";
import OrderItem from "../OrderItem";
import { useState } from "react";
import './style.css'

function OrderList() {
    const statusOrder = [
        {
            type: 1,
            content: 'Đã Hoàn Thành'
        },
        {
            type: 2,
            content: 'Chờ Thanh Toán'
        },
        {
            type: 3,
            content: 'Đang Giao Hàng'
        },
        {
            type: 4,
            content: 'Hủy/ Hoàn Tiền'
        },
    ]

    const [searchParam, setSearchParam] = useSearchParams();
    const [orderList, setOrderList] = useState('')

    const currentType = parseInt(searchParam.get('type')) || 1;
    return ( 
        <div>
            <h2>ĐƠN HÀNG CỦA BẠN</h2>
            <div className="navOrderStatus"> 
                {
                    statusOrder.map((status)=>(
                        <Link 
                            key={status.type}
                            to={`?type=${status.type}`}
                            className= {currentType === status.type ? "active":""}
                            style={{padding:'10px 0', height}}
                        >
                            {status.content}
                        </Link>
                    ))
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