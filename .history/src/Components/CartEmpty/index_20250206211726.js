import cartEmpty from '../../image/cartEmpty.png'
function CartEmpty() {
    return ( 
        <>
            <div className='cartEmptyBody'>
                <img src= {cartEmpty} alt='cartEmpty' style={{width:'80%'}}/>
                <p></p>
            </div>
        </>
    );
}

export default CartEmpty;