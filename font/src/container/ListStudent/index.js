import Main from "../../component/Main";
import {
    Card,
    Button
} from "antd";
const { Meta } = Card;
import "./styles.css";
import {Sex} from "../../db";
import {useState, useEffect} from "react";
import ModalAddStudent from "../../component/ModalAddStudent";
import {addStudent, getListStudent} from "../../api/api";

const getListStudents = async (setListStudent) => {
    const res = await getListStudent()
    console.log("getListStudents", res)

    if (res.data.success) {
        setListStudent(res.data.data)
    }
}

export default function ListStudent() {
    const [visibleAddStudent, setVisibleAddStudent] = useState(false);
    const [listStudent, setListStudent] = useState([]);
    const renderDescription = (item) => {
        const {sex, dob, address, parentName, parentPhone} = item;
        return (
            <div>
                {sex && <div>{`Giới tính: ${sex === Sex.Male ? "Nam" : "Nữ"}`}</div>}
                {dob && <div>{`Ngày sinh: ${dob}`}</div>}
                {address && <div>{`Địa chỉ: ${address}`}</div>}
                {parentName && <div>{`Tên phụ huynh: ${parentName}`}</div>}
                {parentPhone && <div>{`SĐT phụ huynh: ${parentPhone}`}</div>}
            </div>
        )
    }

    const createStudent = async (name, address, dob, parentName, parentPhone, img) => {
        const res = await addStudent({name, address, dob, parentPhone, parentName, img})
        console.log("res", res)
    }

    useEffect(() => {
        getListStudents(setListStudent);
    }, [])

    return (
        <Main
            footerText={"Created by DucPV"}
            links={["Danh sách học sinh"]}
            tab={2}
        >
            <Button size="large" type="ghost" onClick={() => setVisibleAddStudent(true)}>Thêm học sinh</Button>
            {visibleAddStudent &&
                <ModalAddStudent
                    visible={true}
                    onOk={(name, address, dob, parentName, parentPhone, imageUrl) => createStudent(name, address, dob, parentName, parentPhone, imageUrl)}
                    onCancel={() => setVisibleAddStudent(false)}
                />
            }
            <div className="d-flex justify-content-center flex-wrap">
                {listStudent.map((item, index) =>
                    <Card
                        key={index}
                        hoverable
                        style={{ width: 250, margin: 10 }}
                        cover={<img alt="example" src={item.img || 'https://thailamlandscape.vn/wp-content/uploads/2017/10/no-image.png'} style={{height: 250}} />}
                    >
                        <Meta title={item.name} description={renderDescription(item)} />
                    </Card>)}
            </div>
        </Main>
    )
}
