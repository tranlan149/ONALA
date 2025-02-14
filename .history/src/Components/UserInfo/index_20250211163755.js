import { Button, Form, Input, Checkbox } from 'antd';
function UserInfo() {
    return ( 
        <div>
            <div>THÔNG TIN CÁ NHÂN</div>
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
                                        placeholder='Tên của bạn *'
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
                
            </div>
        </div>
    );
}

export default UserInfo;