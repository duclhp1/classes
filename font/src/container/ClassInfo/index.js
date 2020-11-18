import Main from "../../component/Main";
import {Button} from "antd";
import {useState} from "react";
import ModalAddStudent from "../../component/ModalAddStudent";

function ClassInfo() {
    const [visibleAddStudent, setVisibleAddStudent] = useState(false);
    return (
        <Main
            footerText={"Created by DucPV"}
            links={["Lớp A"]}
        >
            <Button size="large" type="ghost" onClick={() => setVisibleAddStudent(true)}>Thêm học sinh</Button>

            <ModalAddStudent
                visible={visibleAddStudent}
                onOk={(name, address, dob)=>{console.log("ok", name, address, dob)}}
                onCancel={() => setVisibleAddStudent(false)}
            />
        </Main>
    );
}

export default ClassInfo;
