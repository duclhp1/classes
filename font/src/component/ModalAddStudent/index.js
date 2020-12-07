import {Input, Modal} from "antd";
import "./styles.css";
import $ from "jquery";
import {useState, useEffect} from "react"

import {
    Upload,
    // message
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const resizeImage = (base64Str, maxWidth = 400, maxHeight = 350) => {
    return new Promise((resolve) => {
        let img = new Image()
        img.src = base64Str
        img.onload = () => {
            let canvas = document.createElement('canvas')
            const MAX_WIDTH = maxWidth
            const MAX_HEIGHT = maxHeight
            let width = img.width
            let height = img.height

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width
                    width = MAX_WIDTH
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height
                    height = MAX_HEIGHT
                }
            }
            canvas.width = width
            canvas.height = height
            let ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0, width, height)
            resolve(canvas.toDataURL())
        }
    })
}

function getBase64(img, callback) {
    console.log("img", img);
    const reader = new FileReader();
    reader.addEventListener('load', async () => {
        console.log("reader", reader.result);
        callback(await resizeImage(reader.result, 900, 900));
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
    return false;
}

export default function ModalAddStudent({visible, onOk, onCancel, item}) {
    const [state, setState] = useState({loading: null, imageUrl: null })
    const {loading, imageUrl} = state

    useEffect(() => {
        if (item) {
            setState(pre => {
                return {
                    ...pre,
                    imageUrl: item.img,
                }
            })
        }
    }, [item])

    const onDone = () => {
        const name = $("#name").val();
        const address = $("#address").val();
        const dob = $("#dob").val();
        const parentName = $("#parentName").val();
        const parentPhone = $("#parentPhone").val();
        if (name.length > 0) {
            if (parentName.length > 0) {
                if (parentPhone > 0) onOk && onOk(name, address, dob, parentName, parentPhone, imageUrl);
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
                defaultValue={item?.name || ''}
            />
            <Input
                id={"address"}
                placeholder={"Địa chỉ"}
                className={"input"}
                allowClear
                defaultValue={item?.address || ''}
            />
            <Input
                id={"dob"}
                placeholder={"Ngày sinh"}
                className={"input"}
                allowClear
                defaultValue={item?.dob || ''}
            />
            <Input
                id={"parentName"}
                className={"input"}
                placeholder={"Tên phụ huynh học sinh"}
                allowClear
                required
                suffix={<div style={{color: "red"}}>*</div>}
                defaultValue={item?.parentName || ''}
            />
            <Input
                id={"parentPhone"}
                placeholder={"Số điện thoại phụ huynh"}
                className={"input"}
                allowClear
                required
                suffix={<div style={{color: "red"}}>*</div>}
                defaultValue={item?.parentPhone || ''}
            />
        </Modal>
    )
}
