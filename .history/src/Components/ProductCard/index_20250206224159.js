import './style.css'
import fork from '../../image/fork.svg'
import addToCart from '../../image/addToCart.svg'
import { Button} from 'antd';
function ProductCard() {
    return ( 
        <div className="productCard">
            <div className='productCardContainer'>
                <img src=''></img>
                <p className='productName'>Name</p>
                <p className='descriptionCả'>Description</p>
                <div className='productCardBuy'>
                    <div>
                        <button className='buy'>MUA NGAY</button>
                        <p> <img src={fork}/>   cost</p>
                    </div>
                    <img className='addToCart' src={addToCart}/>
                </div>
            </div>
        </div>
     );
}

export default ProductCard;