import './style.css'
import fork from '../../image/fork.svg'
import addToCart from '../../image/addToCart.svg'
import { Button} from 'antd';
function ProductCard() {
    return ( 
        <div className="productCard">
            <div className='productCardContainer'>
                <img src=''></img>
                <p>Name</p>
                <p>Description</p>
                <div className='productCardBuy'>
                    <div>
                        <button>MUA NGAY</button>
                        <p> <img src={fork}/>  cost</p>
                    </div>
                    <img onCL src={addToCart}/>
                </div>
            </div>
        </div>
     );
}

export default ProductCard;