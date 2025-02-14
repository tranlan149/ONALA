
import OrderItem from "../OrderItem";

function OrderList() {
    const status = ['Đã hoàn thành', '']
    return ( 
        <div>
            <h2>ĐƠN HÀNG CỦA BẠN</h2>
            <div></div>
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