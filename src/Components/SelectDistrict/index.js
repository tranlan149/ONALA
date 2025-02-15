import { Select, Form } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import './style.css'
function SelectDistrict({ onChange }) {
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [value, setValue] = useState({
        district:'',
        ward:''
    })
    useEffect(()=>{
        async function fetchDistrict() {
            try {
                const response = await axios.get("https://vn-public-apis.fpo.vn/districts/getByProvince",
                    {
                        params: {provinceCode: "01",
                            limit : "-1"
                        },
                        
                    }
                );
                const districtList = response.data.data?.data?.filter(district => district.type==='quan') || []
                setDistricts(districtList)
            } catch (error) {
                console.log(`đây là lỗi ${error}`)
            }
        }
        fetchDistrict();
    },[])
    // console.log(districts)

    const handleSelectDistrict = async (districtCode) => {
        async function fetchWard() {
            try {
                const response = await axios.get("https://vn-public-apis.fpo.vn/wards/getByDistrict",
                    {
                        params: {districtCode,
                            limit : '-1'
                        }
                    }
                )
                const wardList = response.data?.data?.data || []
                setWards(wardList)

                const newValue = { district: districtCode, ward: '' };
                setValue(newValue);
                onChange(newValue);
            } catch (error) {
                console.log(`khong lấy được : ${error}`)
            }
        }
        fetchWard();
    }

    const handleSelectWard = (wardCode) => {
        const newValue = { ...value, ward: wardCode };
        setValue(newValue);
        onChange(newValue);
    }
    // console.log(value)
    return (
        <div id="selectAddress">
            <Form.Item name="district" label="Quận/Huyện" 
                        rules={[{ required: true, message: "Vui lòng chọn quận!" }]}
                        className="selectAddress"
            >
                <Select style={{ width: "100%", width: "200px" }}
                    defaultValue="Chọn Quận"
                    onChange={handleSelectDistrict} value={value.district} placeholder="Chọn quận">
                    {districts.map((district) => (
                        <Select.Option key={district.code} value={district.code}>
                            {district.name}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item name="ward" label="Phường/Xã" 
                        rules={[{ required: true, message: "Vui lòng chọn phường!" }]}
            >
                <Select style={{ width: "100%", width: "200px" }}
                    onChange={handleSelectWard}
                    value={value.ward}
                    defaultValue="Chọn Phường"
                    disabled={!value.district}
                >
                    {wards.map((ward) => (
                        <Select.Option key={ward.code} value={ward.code}>
                            {ward.name}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
        </div>
    );
}

export default SelectDistrict;