import { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import './style.css'
import logo from "../../image/logo.png"
import styles from './LoginForm.module.css'
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";


const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



function DangNhap(){
    const [form] = Form.useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handelSubmitEmail = (values) => {
        console.log('Email cần gửi:', values.email);
        setIsModalOpen(false)
    }

    return(    
        <div className="contentForm">
            <img src={logo} alt="logo" style={{ height: '530px', width: '500px', marginTop:'63px' }} />
            <div className="formContainer">
                <h2 style= {{fontSize:'40px'}}>ĐĂNG NHẬP</h2>
                <Form
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
                <Form.Item
                    
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input 
                        className='underlineInput'
                        placeholder='Địa chỉ email của bạn *'
                    />
                </Form.Item>

                <Form.Item
                    
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input.Password 
                        className='underlineInput'
                        placeholder='Mật khẩu *'
                    />
                </Form.Item>
                <>
                    <p onClick={showModal} className="right-align">Quên Mật Khẩu?</p>
                    <Modal title="BẠN QUÊN MẬT KHẨU ĐĂNG NHẬP?
                                ĐỪNG LO, BẠN CÓ THỂ ĐẶT LẠI DỄ DÀNG" 
                                open={isModalOpen} 
                                onCancel={handleCancel}
                                footer={null}
                                width={679}
                            >
                        <p style={{fontSize:'16px'}}>CHÚNG TÔI SẼ GỬI MỘT LIÊN KẾT ĐẾN EMAIL CỦA BẠN ĐỂ ĐẶT LẠI MẬT KHẨU!</p>
                        <Form form={form} name="forgot_password_form" onFinish={han}>
                            <Form.Item
                                name="email"
                                label=""
                                rules={[
                                    { type: 'email', message: 'Email không hợp lệ!' },
                                    { required: true, message: 'Vui lòng nhập email!' },
                                ]}
                            >
                                <Input className="underlineInput retrieveInput" placeholder="Địa chỉ email của bạn *" />
                            </Form.Item>
                            <p style={{fontSize:'14px'}}>Hãy điền địa chỉ email của bạn tại đây!</p>
                            <Form.Item>
                                <Button 
                                    type="primary" htmlType="submit" block
                                    className= {clsx(styles.button,styles.btnSendEmail)}>
                                    GỬI EMAIL ĐỂ ĐẶT LẠI MẬT KHẨU
                                </Button>
                            </Form.Item>
                        </Form>

                    </Modal>
                </>
                

                <Form.Item label={null}>
                <Button type="primary" htmlType="submit" className = {clsx(styles.button, styles.btnLogin)}>
                    Đăng Nhập
                </Button >
                </Form.Item>
                </Form>
                <p style={{fontSize:'25px',padding:'6px 0px'}}>Hoặc Tiếp Tục Với</p>
                <Button
                        type="primary"   
                        className= {clsx(styles.button,styles.btnGG)}
                        icon={<FaGoogle />}
                >
                        Đăng nhập với Google
                </Button>
                <div style={{fontSize:'25px', textAlign:'center'}}>
                    <p style={{marginTop:'40px'}}>Bạn chưa có tài khoản? 
                        <Link to='/register' style={{fontWeight:'bold'}}>  Đăng kí</Link>
                    </p>
                </div>
            </div>
            
        </div>
            
        
    )
}
export default DangNhap;