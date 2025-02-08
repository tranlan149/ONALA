import './style.css'
import { Utensils} from 'lucide-react';
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
                        <p><Utensils size={24} /> cost</p>
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