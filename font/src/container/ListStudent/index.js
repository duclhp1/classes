import Main from "../../component/Main";
import {
    Card,
    Button
} from "antd";
const { Meta } = Card;
import "./styles.css";
import {Sex, students} from "../../db";
import {useState} from "react";
import ModalAddStudent from "../../component/ModalAddStudent";

export default function ListStudent() {
    const [visibleAddStudent, setVisibleAddStudent] = useState(false);
    const renderDescription = (item) => {
        const {sex, dob, address, phone} = item;
        return (
            <div>
                {sex && <div>{`Giới tính: ${sex === Sex.Male ? "Nam" : "Nữ"}`}</div>}
                {dob && <div>{`Ngày sinh: ${dob}`}</div>}
                {address && <div>{`Địa chỉ: ${address}`}</div>}
                {phone && <div>{`SĐT: ${phone}`}</div>}
            </div>
        )
    }
    return (
        <Main
            footerText={"Created by DucPV"}
            links={["Danh sách học sinh"]}
            tab={2}
        >
            <Button size="large" type="ghost" onClick={() => setVisibleAddStudent(true)}>Thêm học sinh</Button>
            <ModalAddStudent
                visible={visibleAddStudent}
                onOk={(name, address, dob)=>{console.log("ok", name, address, dob)}}
                onCancel={() => setVisibleAddStudent(false)}
            />
            <div className="d-flex justify-content-center flex-wrap">
                {students.map((item, index) =>
                    <Card
                        key={index}
                        hoverable
                        style={{ width: 250, margin: 10 }}
                        cover={<img alt="example" src={item.img} style={{height: 250}} />}
                    >
                        <Meta title={item.title} description={renderDescription(item)} />
                    </Card>)}
            </div>
        </Main>
    )
}
