import './style.css'
import fork from '../../image/fork.svg'
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
                    <Button type="primary" shape="circle" wid>
                        +
                    </Button>
                </div>
            </div>
        </div>
     );
}

export default ProductCard;