import './style.css'
function OrderItem() {
    return ( 
        <div className="orderItem">
            
            <div className="orderContent">
                <div className="item_left">
                    <img width='150px' height='150px' src=''/>
                    <div className='orderText'>
                        <p >ブロックチェーンは、個人情報の管理と認証
                            の方法を変える大きな可能性があると考えています。
                            ブロックチェーンの特徴により、ユーザーはGoogleや
                            Facebookなどの仲介サービスに依存することなく、
                            情報を完全にコントロールでき、個人データをより
                            良く保護することができます。</p>

                    </div>
                </div>
                <div className="item_right">
                    <div className="item_rightTop">
                        <p>Mã Đơn hàng: A123</p>
                        <div>
                            <p>Thành tiền </p>
                            <p>cost</p>
                        </div>
                    </div>
                    <div className="item_rightBot">
                        <button>MUA LẠI</button>
                        <button>Xem chi tiết đơn hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;