import './style.css'
import
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
                        <p>   cost</p>
                    </div>
                    <Button type="primary" shape="circle">
                        +
                    </Button>
                </div>
            </div>
        </div>
     );
}

export default ProductCard;