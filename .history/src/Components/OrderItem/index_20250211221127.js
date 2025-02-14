import './style.css'
function OrderItem() {
    return ( 
        <div className="orderItem">
            
            <div className="orderContent">
                <div className="item_left">
                    <img width='150px' height='150px' src=''/>
                    <div>
                        
                    </div>
                    <p>Name</p>
                    <p>note</p>
                </div>
                <div className="item_right">
                    <div className="item_rightTop">
                        <p>order code</p>
                        <div>
                            <p>Thành tiền </p>
                            <p>cost</p>
                        </div>
                    </div>
                    <div className="item_rightBot">
                        <button>MUA LẠI</button>
                        <button>Xem chi tiết đơn hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;