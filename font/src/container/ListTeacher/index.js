import Main from "../../component/Main";
import {Card, Button} from "antd";
const { Meta } = Card;
import "./styles.css";
import {Sex, teachers} from "../../db";

export default function ListTeacher() {
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
            links={["Danh sách giáo viên"]}
            tab={4}
        >
            <div className="d-flex justify-content-center flex-wrap">
                {teachers.map((item, index) =>
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
                        <Meta title={item.title} description={renderDescription(item)} />
                    </Card>)}
            </div>
        </Main>
    )
}
