import cartEmpty from '../../image/cartEmpty.png'
function CartEmpty() {
    return ( 
        <>
            <div>
                <img src= {cartEmpty} alt='cartEmpty' style={{width:'60%'}}/>
            </div>
        </>
    );
}

export default CartEmpty;