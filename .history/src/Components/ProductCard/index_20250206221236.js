import './style.css'
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
                        <p>cost</p>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default ProductCard;