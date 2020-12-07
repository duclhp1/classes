import Main from "../../component/Main";
import {
    Card,
    Button,
    message,
    Image
} from "antd";
const { Meta } = Card;
import "./styles.css";
import {Sex} from "../../db";
import {useState, useEffect} from "react";
import ModalAddStudent from "../../component/ModalAddStudent";
import {addStudent, editStudent, getListStudent} from "../../api/api";
import { EditTwoTone, FundTwoTone } from '@ant-design/icons';

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
    const [selectedStudent, setSelectedStudent] = useState(null);
    const renderDescription = (item) => {
        const {sex, dob, address, parentName, parentPhone} = item;
        return (
            <div>
                {sex && <div>{`Giới tính: ${sex === Sex.Male ? "Nam" : "Nữ"}`}</div>}
                {dob && <div>{`Ngày sinh: ${dob}`}</div>}
                {address && <div>{`Địa chỉ: ${address}`}</div>}
                {parentName && <div>{`Tên phụ huynh: ${parentName}`}</div>}
                {parentPhone && <div>{`SĐT phụ huynh: ${parentPhone}`}</div>}
                {!sex && <br/>}
                {!dob && <br/>}
                {!address && <br/>}
            </div>
        )
    }

    const createStudent = async (name, address, dob, parentName, parentPhone, img, id) => {
        try {
            const res = !id ? await addStudent({name, address, dob, parentPhone, parentName, img}) : await editStudent({id, name, address, dob, parentPhone, parentName, img})
            console.log("res", res)
            if (res.data.success) {
                message.success(`${!id ? 'Thêm' : 'Sửa thông tin'} học sinh thành công!`)
                setVisibleAddStudent(false)
                setTimeout(() => window.location.reload(), 1000)
            } else message.error(`${!id ? 'Thêm' : 'Sửa thông tin'} học sinh không thành công!`)
        }
        catch (e) {
            message.error('Không Thêm/Sửa được học sinh (ảnh quá lớn)!')
        }
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
                    onOk={(name, address, dob, parentName, parentPhone, imageUrl) => createStudent(name, address, dob, parentName, parentPhone, imageUrl, selectedStudent._id)}
                    onCancel={() => setVisibleAddStudent(false)}
                    item={selectedStudent}
                />
            }
            <div className="d-flex justify-content-center flex-wrap">
                {listStudent.map((item, index) =>
                    <Card
                        key={index}
                        hoverable
                        style={{ width: 250, margin: 10 }}
                        cover={<Image alt="example" src={item.img || 'https://thailamlandscape.vn/wp-content/uploads/2017/10/no-image.png'} style={{height: 250}} height={250} />}
                        actions={[
                            <EditTwoTone key="edit" onClick={() => {
                                setVisibleAddStudent(true);
                                setSelectedStudent(item);
                            }} />,
                            <FundTwoTone key="edit" onClick={() => {console.log("thong ke", item)}} />,
                        ]}
                    >
                        <Meta title={item.name} description={renderDescription(item)} />
                    </Card>)}
            </div>
        </Main>
    )
}
