import {  Form, Input } from 'antd';
import { AiFillEdit } from "react-icons/ai";
import styles from './UserInfo.module.css'
import './style.css'
import { use, useEffect, useState } from 'react';
function UserInfo(props) {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [componentDisabled, setComponentDisabled] = useState(false);
    const handleEdit = () => {
        setComponentDisabled(!componentDisabled)
    }
    useEffect(()=>{},[c])
    
    return ( 
        <div className='userInfo'>
            <h2>THÔNG TIN CÁ NHÂN</h2>
            <div className="userInfoContainer">
                <AiFillEdit className='iconEdit' size={24} color="black"  
                            onClick= {handleEdit}
                />
                <Form 
                    name="info"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    disabled={componentDisabled}
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
                            value={props.name}
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
                <span>      
                    SỐ ĐIỆN THOẠI
                    <Input 
                            className= {styles.inputUserInfo}
                            placeholder='Số điện thoại'
                            maxLength={10} // Giới hạn độ dài
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} // Chỉ cho nhập số
                    />
                </span>
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
                    <span>
                        EMAIL
                        <Input 
                            className={styles.inputUserInfo}
                            placeholder='Địa chỉ email'
                        />
                    </span>

                </Form.Item>
                <Form.Item
                    
                    name="address"
                    
                >
                <span>
                    ĐỊA CHỈ
                    <Input 
                        className= {styles.inputUserInfo}
                        placeholder='Tên của bạn *'
                    />
                </span>
                    
                </Form.Item>

            </Form>                
                
            </div>
        </div>
    );
}

export default UserInfo;