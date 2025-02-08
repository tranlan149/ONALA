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
            
            <div className="item3">
                cost
            </div>
            <div className="item4">
                button
            </div>
            <div className="item5">
                thành tiền
            </div>
        </div>
    );
}

export default CartItem;