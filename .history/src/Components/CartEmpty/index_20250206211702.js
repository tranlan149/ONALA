import cartEmpty from '../../image/cartEmpty.png'
function CartEmpty() {
    return ( 
        <>
            <div className=''>
                <img src= {cartEmpty} alt='cartEmpty' style={{width:'80%'}}/>
            </div>
        </>
    );
}

export default CartEmpty;