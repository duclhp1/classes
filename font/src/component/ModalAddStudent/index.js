import {Input, Modal} from "antd";
import "./styles.css";
import $ from "jquery";
import {useState} from "react"

import {
    Upload,
    // message
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
    console.log("img", img);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        console.log("reader", reader.result);
        callback(reader.result);
    });
    reader.readAsDataURL(img);
}

function beforeUpload(file, setState) {
    console.log("beforeUpload", file);

    getBase64(file, imageUrl => {
        console.log("imageUrl", imageUrl);
        setState({
            imageUrl,
        })
    });
    return true || file;
    // const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    // if (!isJpgOrPng) {
    //     message.error('You can only upload JPG/PNG file!');
    // }
    // const isLt2M = file.size / 1024 / 1024 < 12;
    // if (!isLt2M) {
    //     message.error('Ảnh phải có kích thước nhỏ hơn 12MB!');
    // }
    // return isJpgOrPng && isLt2M;
}

export default function ModalAddStudent({visible, onOk, onCancel}) {
    const [state, setState] = useState({loading: null, imageUrl: null })
    const {loading, imageUrl} = state

    const onDone = () => {
        const name = $("#name").val();
        const address = $("#address").val();
        const dob = $("#dob").val();
        const parentName = $("#parentName").val();
        const parentPhone = $("#parentPhone").val();
        if (name.length > 0) {
            if (parentName.length > 0) {
                if (parentPhone > 0) onOk && onOk(name, address, dob, parentName, parentPhone);
                else {
                    alert("Hãy nhập SĐT phụ huynh");
                }
            } else {
                alert("Hãy nhập Tên phụ huynh");
            }
        } else {
            alert("Hãy nhập Tên học sinh");
        }
    };

    // const handleChange = info => {
    //     return info;
        // if (info.file.status === 'uploading') {
        //     setState({ loading: true });
        //     return;
        // }
        // if (info.file.status === 'done') {
        //     // Get this url from response in real world.
        //     getBase64(info.file.originFileObj, imageUrl => {
        //         console.log("imageUrl", imageUrl);
        //         setState({
        //             imageUrl,
        //             loading: false,
        //         })
        //     });
        // }
    // };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Ảnh</div>
        </div>
    );

    return (
        <Modal
            visible={visible}
            onOk={onDone}
            onCancel={onCancel}
            cancelText={"Đóng"}
            okText={"Thêm"}
            title={"Thêm học sinh"}
        >
            <Upload
                accept="image/*"
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={(file) => beforeUpload(file, setState)}
                action=""
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%' }} /> : uploadButton}
            </Upload>
            <Input
                id={"name"}
                placeholder={"Tên học sinh"}
                allowClear
                required
                suffix={<div style={{color: "red"}}>*</div>}
            />
            <Input
                id={"address"}
                placeholder={"Địa chỉ"}
                className={"input"}
                allowClear
            />
            <Input
                id={"dob"}
                placeholder={"Ngày sinh"}
                className={"input"}
                allowClear
            />
            <Input
                id={"parentName"}
                className={"input"}
                placeholder={"Tên phụ huynh học sinh"}
                allowClear
                required
                suffix={<div style={{color: "red"}}>*</div>}
            />
            <Input
                id={"parentPhone"}
                placeholder={"Số điện thoại phụ huynh"}
                className={"input"}
                allowClear
                required
                suffix={<div style={{color: "red"}}>*</div>}
            />
        </Modal>
    )
}
