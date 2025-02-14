import {  Form, Input } from 'antd';
import styles from './UserInfo.module.css'
function UserInfo() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return ( 
        <div>
            <h2>THÔNG TIN CÁ NHÂN</h2>
            <div className="userInfoContainer">
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
                    <span>
                    HỌ VÀ TÊN
                        <Input 
                            className= {styles.inputUserInfo}

                        />
                    </span>
                </Form.Item>
                
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        { required: true, message: 'Vui lòng nhập số điện thoại!' },
                        { pattern: /^[0-9]{10}$/, message: 'Số điện thoại phải có đúng 10 chữ số!' }
                    ]}
                >
                
                SỐ ĐIỆN THOẠI
                <Input 
                        className= {styles.inputUserInfo}
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

                    EMAIL
                    <Input 
                        className={styles.inputUserInfo}
                        placeholder='Địa chỉ email'
                    />
                </Form.Item>
                <Form.Item
                    
                    name="address"
                    
                >
                    ĐỊA CHỈ
                    <Input 
                        className= {styles.inputUserInfo}
                        placeholder='Tên của bạn *'
                    />
                </Form.Item>

            </Form>                
                
            </div>
        </div>
    );
}

export default UserInfo;