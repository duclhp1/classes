import {Input, Modal} from "antd";
import "./styles.css";
import $ from "jquery";

export default function ModalAddClass({visible, onOk, onCancel}) {
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
    }

    return (
        <Modal
            visible={visible}
            onOk={onDone}
            onCancel={onCancel}
            cancelText={"Đóng"}
            okText={"Thêm"}
            title={"Thêm học sinh"}
        >
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
