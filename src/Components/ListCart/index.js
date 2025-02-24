import { Checkbox } from 'antd';
import CartItem from '../CartItem';
import './style.css'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
function ListCart() {

    const[isChecked, setChecked] = useState(false)
    const [isScrollDown, setScroll] = useState (false)
    const listCartRef = useRef(null);

    const hanldeChecked = (e) => {
        setChecked(e.target.checked)
        
    }
    
    useEffect(()=> {
        const hanldeScroll = () => {
            if(!listCartRef.current) return;
            const positionCart = listCartRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            setScroll(positionCart.bottom <= windowHeight)
        }
        window.addEventListener('scroll',hanldeScroll)
        return () => {
            window.removeEventListener('scroll', hanldeScroll)
        }
    },[])
    return ( 
        <div>
            <div ref={listCartRef} className="listCart">
                <div className="listCartHead">
                    <p className='text1' >
                        <Checkbox 
                            style={{marginRight:'40px'}}
                            checked = {isChecked}
                            onChange = {hanldeChecked}
                        >
                        </Checkbox> 
                        Sản phẩm </p>
                    <p >Đơn giá</p>
                    <p >Số lượng</p>
                    <p >Số tiền</p>
                    <p>Thao tác</p>
                </div>
                <div className="listCartBody">
                    <CartItem 
                        isChecked={isChecked}
                        name=''
                        cost = '10000'
                        imageURL=''
                    />
                    <CartItem 
                        isChecked={isChecked}
                        name=''
                        cost = '10000'
                        imageURL=''
                    />
                    
                </div>
            </div>
            <div className= {isScrollDown? 'toPayment':'toPaymentFix'}>
                <Link to='/orderinfo'><button id='toPaymentBtn'>
                    ĐẶT HÀNG
                </button></Link>
            </div>
        </div>
    );
}

export default ListCart;