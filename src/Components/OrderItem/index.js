import { useNavigate } from 'react-router-dom';
import FormatCost from '../FormatCost'
import './style.css'
function OrderItem(props) {
    const navigate = useNavigate()
    const handleToOrderDetail = ()=> {
        navigate(`orderdetail/${props.orderCode}?type=${props.type}`);
    }
    return ( 
        <div className="orderItem">
            <div className="orderContent">
                <div className="item_left">
                    <img width='150px' height='150px' src={props.imageURL}/>
                    <div className='orderText'>
                        <p>{props.name}</p>

                    </div>
                </div>
                <div className="item_right">
                    <div className="item_rightTop">
                        <p>Mã Đơn hàng: {props.orderCode}</p>
                        <div className='costText'>
                            <p>Thành tiền </p>
                            <p><FormatCost value={props.totalCost}/></p>
                        </div>
                    </div>
                    <div className="item_rightBot">
                        <button id='buyAgain'>MUA LẠI</button>
                        <button id='showOrderDetail' onClick={handleToOrderDetail}>Xem chi tiết đơn hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;