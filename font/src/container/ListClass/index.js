import Main from "../../component/Main";
import {Card, Button} from "antd";
const { Meta } = Card;
import "./styles.css";
import {classes} from "../../db";
import ModalAddClass from "../../component/ModalAddClass";
import {useState} from "react";

export default function ListClass() {
    const [visibleAddStudent, setVisibleAddStudent] = useState(false);
    const renderDescription = (des) => {
        const list = des.split("\n");
        return list.map(item => <div key={item}>{item}</div>
        )
    }
    return (
        <Main
            footerText={"Created by DucPV"}
            links={["Danh sách lớp"]}
            tab={1}
        >
            <Button size="large" type="ghost" onClick={() => setVisibleAddStudent(true)}>Thêm lớp học</Button>
            <ModalAddClass
                visible={visibleAddStudent}
                onOk={(name, address, dob)=>{console.log("ok", name, address, dob)}}
                onCancel={() => setVisibleAddStudent(false)}
            />
            <div className="d-flex justify-content-center flex-wrap">
                {classes.map((item, index) =>
                    <Card
                        key={index}
                        hoverable
                        style={{ width: 250, margin: 10 }}
                        cover={<img alt="example" src={item.img} style={{height: 250}} />}
                        actions={[
                            <Button
                                type="primary"
                                key={0}
                                href="/class"
                            >Xem</Button>
                        ]}
                    >
                        <Meta title={item.title} description={renderDescription(item.description)} />
                    </Card>)}
            </div>
        </Main>
    )
}
