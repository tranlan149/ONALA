import { Button, Form, Input } from 'antd';
import FormatCost from '../../Components/FormatCost';
import SelectDistrict from '../../Components/SelectDistrict';
import './style.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
  
function OrderInfo() {
    
    const [formOrder] = Form.useForm();
    const locationProduct = useLocation()
    const orderList = locationProduct.state?.orderList || [];
    const isBuyNow = locationProduct.state?.buyNow || true
    const shippingFee = 25000

    const[count, setCount] = useState(orderList[0]?.quantity || 1); // áp dụng với trường hợp mua ngay
    const [total, setTotal] = useState(0);
    const payment = [
        {
            type:'delivery',
            name:'THANH TOÁN KHI NHẬN HÀNG'
        },
        {
            type:'e-wallet',
            name:'THANH TOÁN BẰNG VÍ MOMO/VNPAY '
        }
    ]
    const [paymentType, setPaymentType] = useState('')
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    const handleSetPaymentType = (type) =>{
        setPaymentType(type);
        formOrder.setFieldsValue({ paymentType: type });
    }
    
    const handleIncrease = ( ) => {
        setCount(count+1)
        
    }
    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1);
            
        }
        
    };
    useEffect (()=> {
        const newTotal = isBuyNow
        ? orderList[0]?.cost * count
        : orderList.reduce((prev, item) => prev + item.cost * item.quantity, 0);

        setTotal(newTotal); 
                        
    },[count])
    return ( 
        <div className="orderInfo">
            <div id="orderInfoDetail">
                <h2 style={{textAlign:'center'}}>THÔNG TIN ĐƠN HÀNG</h2>
                <div  className='containerGeneral'>
                    <p>THỜI GIAN GIAO HÀNG : GIAO NGAY</p>
                    <p>ĐƯỢC GIAO TỪ: ONALA  FASTFOOD HÀ ĐÔNG</p>
                </div>
                <div >
                    <Form
                    form={formOrder}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <div id='orderInfoFrom' className='containerGeneral'>
                        <p>THÔNG TIN KHÁCH HÀNG</p>
                        <p>HỌ VÀ TÊN:</p>
                        <Form.Item
                            
                            name="name"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input 
                                className='underlineInput inputOrder'
                            />
                        </Form.Item>
                        <p>SỐ ĐIỆN THOẠI:</p>
                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                { required: true, message: 'Vui lòng nhập số điện thoại!' },
                                { pattern: /^[0-9]{10}$/, message: 'Số điện thoại phải có đúng 10 chữ số!' }
                            ]}
                        >
                            <Input
                                className='underlineInput inputOrder'
                                maxLength={10} // Giới hạn độ dài
                                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} // Chỉ cho nhập số
                            />
                        </Form.Item>
                        <SelectDistrict onChange={(value) => formOrder.setFieldsValue(value)}/>
                        <p>SỐ NHÀ: </p>
                        <Form.Item
                            
                            name="houseNumber"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your house number!',
                                },
                            ]}
                        >
                            <Input 
                                className='underlineInput inputOrder'
                            />
                        </Form.Item>
                        <p>TÊN ĐƯỜNG:</p>
                        <Form.Item
                            
                            name="street"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your street!',
                                },
                            ]}
                        >
                            <Input 
                                className='underlineInput inputOrder'
                            />
                        </Form.Item>
                        <p>GHI CHÚ CỤ THỂ:</p>            
                        <Form.Item
                            
                            name="note"
                            
                        >
                            <Input 
                                className='underlineInput inputOrder'
                            />
                        </Form.Item>
                        
                    </div>
                    <div className='containerGeneral'>
                        <Form.Item
                            name="paymentType"
                            rules={[{ required: true, message: "Vui lòng chọn phương thức thanh toán!" }]}
                           
                        >
                            <div style={{display:'flex', flexDirection:'column'}} >

                                <p>PHƯƠNG THỨC THANH TOÁN</p>
                                    {
                                        payment.map((payment, index)=>(
                                            <Button key={index} 
                                            className='btnPaymentType'
                                            type={paymentType === payment.type ? "primary" : "default"}
                                                onClick={()=> handleSetPaymentType(payment.type)}
                                            >
                                                {payment.name}
                                            </Button>
                                        ))
                                    }
                            </div>
                            
                        </Form.Item>
                            
                    </div>
                    <div style={{textAlign:'center'}}>
                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit" id="orderBtn" >
                                ĐẶT HÀNG
                            </Button >
                        </Form.Item>

                    </div>
                    </Form>

                    
                </div>
            </div>
            <div>
                {isBuyNow && <div id='buyNowItem'>
                    <img className='imgProBuyNow' alt={orderList[0]?.name}></img>
                    <div>
                        <p>{orderList[0]?.name}</p>
                        <p>{orderList[0]?.cost}</p>
                        <div className="item3">
                            <button className='btn_count' onClick={handleDecrease} >-</button>
                            <p className='text_count'>{count}</p>
                            <button className='btn_count' onClick={handleIncrease} >+</button>

                        </div>
                    </div>
                </div>}
                
                <div id='orderSummary' className='containerGeneral'>

                    <p>TÓM TẮT ĐƠN HÀNG</p>
                    <p>Tên món</p>
                    <div className='generalCost'>
                        <p>TỔNG ĐƠN HÀNG :</p>
                        <FormatCost value={total}/>
                    </div>
                    <div className='generalCost'>
                        <p>PHÍ VẬN CHUYỂN :</p>
                        <FormatCost value={shippingFee}/>
                    </div>
                    <div className='generalCost'>
                        <p>THÀNH TIỀN :</p>
                        <FormatCost value={total + shippingFee}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OrderInfo;