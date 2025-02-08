import './style.css'
import fork from '../../image/fork.svg'
import addToCart from '../../image/addToCart.svg'
import FormatCost from '../FormatCost';
function ProductCard(props) {
    return ( 
        <div className="productCard">
            <img className='' src={props.imageURL} style={{width:'100%'}}/>
            <div className='productCardContainer'>
                
                <p className='nameCard'>{props.name}</p>
                <p className='descriptionCard'>{props.description}</p>
                <div className='productCardBuy'>
                    <div>
                        <button className='buy'>MUA NGAY</button>
                        <p className='costCard'> <img src={fork}/> <FormatCost/> {props.cost}  Đ</p>
                    </div>
                    <img className='addToCart' src={addToCart}/>
                </div>
            </div>
        </div>
     );
}

export default ProductCard;