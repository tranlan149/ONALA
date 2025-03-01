
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import OrderItem from "../OrderItem";
import { useEffect, useState } from "react";
import './style.css'

function OrderList() {
    const statusOrder = [
        {
            type: 1,
            content: 'Đã Hoàn Thành'
        },
        {
            type: 2,
            content: 'Chờ Xác Nhận'
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
    const navigate = useNavigate(); // Dùng điều hướng URL
    const [orderList, setOrderList] = useState([]);

    const currentType = parseInt(searchParam.get("type")) || 1;

    
    useEffect(() => {
        const currentPath = window.location.pathname; // Lấy path hiện tại
        if (currentPath === "/account/purchase" && !searchParam.get("type")) {
            navigate("?type=1", { replace: true });
        }
    }, [searchParam, navigate]);

    useEffect(()=>{
        setOrderList([])
        console.log(orderList)
    },[currentType])
    return ( 
        <div>
            <h2 className="titleUserContent">ĐƠN HÀNG CỦA BẠN</h2>
            <div className="navOrderStatus"> 
                {
                    statusOrder.map((status)=>(
                        <Link 
                            key={status.type}
                            to={`?type=${status.type}`}
                            className= {currentType === status.type ? "activeStatus":""}
                            style={{height:'100%',lineHeight:'54px'}}
                        >
                            {status.content}
                        </Link>
                    ))
                }

            </div>
            <div className="OrderListContainer">
                {/* {Ở đây OrderItem hiển thị products[0]
                     1 OrderItem sẽ có nhiều sản phẩm} 
                     Khi mà truyền props vào OrderItem 
                     -> thì lấy phần tử [0] trong list để đại diện cho name OrderItem
                     còn totalCost nhớ cộng tổng trước rồi mới hiện lên */}
                <div> 
                    <OrderItem
                        imageURL=''
                        name = 'list order 1'
                        orderCode = 'A1292929'
                        totalCost = '19828727'
                        type = {currentType}
                    />
                    <OrderItem
                        imageURL=''
                        name = 'list order 2'
                        orderCode = 'B1292shsh9'
                        totalCost = '19727'
                        type = {currentType}
                    />
                    
                </div>
            </div>
        </div>
    );
}

export default OrderList;