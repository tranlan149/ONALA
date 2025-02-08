import { Checkbox } from "antd";
function CartItem() {
    return ( 
        <div className="cartItem">
            <div className="item1"> 
                <Checkbox></Checkbox>
                <img/>
                <div className="itemNote">
                    <p>Name</p>
                    <button>Ghi chú</button>
                </div>
            </div>
            
            <div className="item2">
                cost
            </div>
            <div className="item3">
                button
            </div>
            <div className="item4">
                thành tiền
            </div>
        </div>
    );
}

export default CartItem;