import { useParams, useSearchParams } from "react-router-dom";
import DetailItem from "./DetailItem";
import FormatCost from "../FormatCost";
import editInfoOrder from '../../image/editInfoOrder.png'
import './style.css'
import { useState } from "react";
function OrderDetail() {
    const {orderCode} = useParams()
    const [typeParam] = useSearchParams();
    const currentType = parseInt(typeParam.get('type')) ;
    let currentStatus = ''
    switch (currentType) {
        case 1:
            currentStatus = 'Đã hoàn thành'
            break;
        case 2:
            currentStatus = 'Đang chờ xác nhận'
            break;
        case 3:
            currentStatus = 'Đang giao'
            break;
        case 4:
            currentStatus = 'Đã hủy'
            break;
        default:
            break;
    }
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: "Mèo chan",
        phone: "2847374773273",
        address: "Chung cư Xuân Mai, Nguyễn Trác, Yên Nghĩa, Hà Đông",
        note: "Thêm hành muối tỏi ớt",
    });

    const handleEditClick = () => {
        if (isEditing) {
            console.log( userInfo);
        }
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
      
        if (name === "phone") {
            if (!/^\d*$/.test(value)) return;
          }
        
          setUserInfo((prev) => ({ ...prev, [name]: value }));
      };

      // giả sử đây là mảng chứa list sản phẩm có trong mã đơn orderCode = A12d223
      const orderList = [{}]
      const totalCost = 0 // Ở đây tính bằng orderList.reduce (cost của từng sản phẩm * số lượng của nó)
    return ( 
        <div>
            <h2 style={{textAlign:'center'}}>Mã đơn hàng: {orderCode}</h2>
            <div className="orderDetailContainer">
                <h3 className="orderStatus">Trạng thái: {currentStatus}</h3>
                {
                    orderList.map((detailItem, index) => (
                        <DetailItem 
                            name= {detailItem.name}
                            imageURL = {detailItem.imageURL}
                            quantity = {detailItem.quantity}
                            cost = {detailItem.cost}
                        />
                    ))
                }
                
                
                <div className="totalDetail">
                    <h3>THÀNH TIỀN : </h3>
                    <h3 style={{color:'#A80101'}}> <FormatCost value= {totalCost}/></h3>
                </div>
                <div className="orderInfoDetail">
                    {currentType === 2 && <img id='editInfoOrder' src={editInfoOrder} onClick={handleEditClick}/> }
                    
                    <div id="OrderInfoTitle">
                        <p>HỌ VÀ TÊN: </p>
                        <p>SỐ ĐIỆN THOẠI: </p>
                        <p>ĐỊA CHỈ: </p>
                        <p>GHI CHÚ:  </p>
                    </div>
                    <div id="userOrderInfo">
                        {isEditing ? (
                            <>
                                <input type="text" name="name" value={userInfo.name} onChange={handleChange} />
                                <input  type="text" name="phone" value={userInfo.phone}
                                        onChange={handleChange}/>
                                <input type="text" name="address" value={userInfo.address} onChange={handleChange} />
                                <input type="text" name="note" value={userInfo.note} onChange={handleChange} />
                            </>
                            ) : (
                            <>
                                <p>{userInfo.name}</p>
                                <p>{userInfo.phone}</p>
                                <p>{userInfo.address}</p>
                                <p>{userInfo.note}</p>
                            </>
                        )}
                    </div>
                </div>
                <div className="btnOrderDetail">
                    {(currentType === 1 || currentType === 4) && <button  id='buyAgain'>MUA LẠI</button> }
                    {(currentType === 2) && <button  id='cancelBtn'>HỦY</button> }
                </div>
                
                
            </div>
        </div>
    );
}

export default OrderDetail; 