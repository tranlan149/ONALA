import OrderItem from "../OrderItem";
function OrderList() {
    return ( 
        <div>
            <h2>ĐƠN HÀNG CỦA BẠN</h2>
            <div className="OrderListContainer">
                
                <div>
                    <OrderItem
                        name = 'trà đào'
                        orderCode = 'A1292929'
                        cost = ''
                    />
                </div>
            </div>
        </div>
    );
}

export default OrderList;