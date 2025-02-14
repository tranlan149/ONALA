import FormatCost from '../FormatCost'
import './style.css'
function OrderItem(props) {
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
                        <p>Mã Đơn hàng: {}</p>
                        <div className='costText'>
                            <p>Thành tiền </p>
                            <p><FormatCost value={props.cost}/></p>
                        </div>
                    </div>
                    <div className="item_rightBot">
                        <button id='buyAgain'>MUA LẠI</button>
                        <button id='showOrderDetail'>Xem chi tiết đơn hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;