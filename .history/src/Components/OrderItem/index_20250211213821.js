
function OrderItem() {
    return ( 
        <div className="orderItem">
            <img width='150px' height='150px' src=''/>
            <div className="orderContent">
                <div className="item_left">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;