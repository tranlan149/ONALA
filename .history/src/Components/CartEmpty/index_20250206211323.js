import cartEmpty from '../../image/cartEmpty.png'
function CartEmpty() {
    return ( 
        <>
            <div>
                <img src= {cartEmpty} alt='cartEmpty' width={50%}/>
            </div>
        </>
    );
}

export default CartEmpty;