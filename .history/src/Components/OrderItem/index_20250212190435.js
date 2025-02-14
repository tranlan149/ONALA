import FormatCost from '../FormatCost'
import './style.css'
function OrderItem(props) {
    return ( 
        <div className="orderItem">
            
            <div className="orderContent">
                <div className="item_left">
                    <img width='150px' height='150px' src={props.imageURL}/>
                    <div className='orderText'>
                        <p >Name</p>

                    </div>
                </div>
                <div className="item_right">
                    <div className="item_rightTop">
                        <p>Mã Đơn hàng: A123hdhdhhdhdh</p>
                        <div className='costText'>
                            <p>Thành tiền </p>
                            <p><FormatCost value='0192882800000000'/></p>
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