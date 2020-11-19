import {Modal} from "antd";
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
            title={"Thêm lớp học"}
        >
            Giáo viên đứng lớp
        </Modal>
    )
}
