import {Input, Modal} from "antd";
import "./styles.css";
import $ from "jquery";
import {useState, useEffect} from "react"

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

export default function ModalAddTeacher({visible, onOk, onCancel, data}) {
    const [state, setState] = useState({loading: null, imageUrl: null })
    const {loading, imageUrl} = state

    useEffect(() => {
        if (data) {
            setState({
                imageUrl: data.imageUrl,
            })
        }
    }, [])

    const onDone = () => {
        const name = $("#name").val();
        const address = $("#address").val();
        const dob = $("#dob").val();
        const phone = $("#phone").val();
        if (name.length > 0) {
                if (phone > 0) onOk && onOk(name, address, dob, phone);
                else {
                    alert("Hãy nhập SĐT giáo viên");
                }
        } else {
            alert("Hãy nhập Tên giáo viên");
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
            title={"Thêm giáo viên"}
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
                placeholder={"Tên giáo viên"}
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
                id={"phone"}
                placeholder={"Số điện thoại"}
                className={"input"}
                allowClear
                required
                suffix={<div style={{color: "red"}}>*</div>}
            />
        </Modal>
    )
}
