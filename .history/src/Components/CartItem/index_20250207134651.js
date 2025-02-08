import './style.css'
import { Checkbox } from "antd";
import ca from '../../image/ca.png'
function CartItem() {
    return ( 
        <div className="cartItem">
            <div className="item1"> 
                <Checkbox style={{marginRight:'40px'}}></Checkbox>
                <img widthsrc={ca}/>
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
            <div className="item5">
                Thao tác
            </div>
        </div>
    );
}

export default CartItem;