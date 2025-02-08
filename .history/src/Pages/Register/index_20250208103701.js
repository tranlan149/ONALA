import { Button, Form, Input, Checkbox } from 'antd';
import '../DangNhap/style.css'
import logo from "../../image/logo.png"
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './RegisterForm.module.css'


const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function Register(){
    
    return(    
        <div className="contentForm">
            <img src={logo} alt="logo" style={{ height: '530px', width: '500px', marginTop:'63px' }} />
            <div className="formContainer">
                <h2 style= {{fontSize:'40px'}}>TẠO TÀI KHOẢN</h2>
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
                    
                    name="name"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input 
                        className='underlineInput'
                        placeholder='Họ của bạn *'
                    />
                </Form.Item>
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
                        placeholder='Tên đăng nhập của bạn *'
                    />
                </Form.Item>
                
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        { required: true, message: 'Vui lòng nhập số điện thoại!' },
                        { pattern: /^[0-9]{10}$/, message: 'Số điện thoại phải có đúng 10 chữ số!' }
                    ]}
                >
                    <Input
                        className='underlineInput'
                        placeholder='Số điện thoại'
                        maxLength={10} // Giới hạn độ dài
                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} // Chỉ cho nhập số
                    />
                </Form.Item>

                <Form.Item 
                    name={['email']} 
                    label="Email" 
                    rules={[
                            { type: 'email'}, 
                            {
                                required: true,
                                message: 'Please input your email!',
                            }, 
                        ]}>
                    <Input 
                        className='underlineInput'
                        placeholder='Địa chỉ email'
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
                
                <Form.Item 
                    name="remember" 
                    valuePropName="" 
                    label={null}
                    rules={[{ required: true, message: 'Vui lòng đồng ý với các chính sách!' }]}
                >   
                <Checkbox>
                    <p style={{fontSize:'18px', fontWeight:'400'}}>
                        Tôi đã đọc và đồng ý với 
                        <Link> Chính Sách Hoạt Động</Link> và 
                        <Link> Chính Sách Bảo Mật Thông Tin</Link> của ONALA FASTFOOT
                    </p>
                </Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit" className= {clsx(styles.button, styles.btnCreate)}>
                        Tạo tài khoản
                    </Button >
                </Form.Item>
                </Form>
                
                
            </div>
            
        </div>
            
        
    )
}
export default Register;