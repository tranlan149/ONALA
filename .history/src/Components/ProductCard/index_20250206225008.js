import './style.css'
import fork from '../../image/fork.svg'
import addToCart from '../../image/addToCart.svg'
import cam from '../../image/cam.png'
import { Button} from 'antd';
function ProductCard() {
    return ( 
        <div className="productCard">
            <div className='productCardContainer'>
                <img className='' src={cam} style={{width:'100%'}}/>
                <p className='nameCard'>Name</p>
                <p className='descriptionCard'>Description</p>
                <div className='productCardBuy'>
                    <div>
                        <button className='buy'>MUA NGAY</button>
                        <p className='costCard'> <img src={fork}/>   Đ</p>
                    </div>
                    <img className='addToCart' src={addToCart}/>
                </div>
            </div>
        </div>
     );
}

export default ProductCard;