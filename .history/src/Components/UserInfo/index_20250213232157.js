import {  Form, Input } from 'antd';
import { AiFillEdit } from "react-icons/ai";
import styles from './UserInfo.module.css'
import './style.css'
import {   useState } from 'react';

function UserInfo(props) {
    
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [componentDisabled, setComponentDisabled] = useState(true);
    const [edit, setEdit]= useState(false)
    const handleEdit = () => {
        setComponentDisabled(!componentDisabled)
        setEdit(!edit)
    }

    const [formData, setFormData] = useState({
        name: props.name,
        email: props.email,
        phone: props.phone,
        address:props.address
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    return ( 
        <div className='userInfo'>
            <h2>THÔNG TIN CÁ NHÂN</h2>
            <div className="userInfoContainer">
                <AiFillEdit className='iconEdit' size={24} color="black"  
                            onClick= {handleEdit}
                />
                <div className={styles.fromContainer}>
                    <div className='    margin-top: 50px;
'>
                        <p>HỌ VÀ TÊN</p>
                        <p>SỐ ĐIỆN THOẠI</p>
                        <p>EMAIL</p>
                        <p>ĐỊA CHỈ</p>
                    </div>
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
                            <Input 
                                className= {styles.inputUserInfo}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
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
                        <Input  name="phone"
                                value={formData.phone}
                                onChange={handleChange}
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

                            <Input 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.inputUserInfo}
                                placeholder='Địa chỉ email'
                            />

                    </Form.Item>
                    <Form.Item
                        
                        name="address"
                        
                    >

                        <Input 
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className= {styles.inputUserInfo}
                            placeholder='Tên của bạn *'
                        />

                        
                    </Form.Item>

                    </Form>                
                </div>

                
            </div>
        </div>
    );
}

export default UserInfo;