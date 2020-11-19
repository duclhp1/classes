import Main from "../../component/Main";
import {Card, Button} from "antd";
const { Meta } = Card;
import "./styles.css";

const listCard = [
    {
        img: "https://www.pngkey.com/png/full/851-8511104_drawing-cartoon-portrait-face-painting-nh-chn-dung.png",
        title: "Lớp toán 11 thứ 2 19h-21h",
        description: "GV: Thầy tóc xoăn\nLớp: 11\nThời gian: 19h-21h thứ 2",
        key: 1
    },
    {
        img: "https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-cartoon-man-avatar-free-illustration-image_1375256.jpg",
        title: "Lớp lý 12 thứ 2 19h-21h",
        description: "GV: Thầy đội mũ\nLớp: 11\nThời gian: 19h-21h thứ 2",
        key: 2
    },
    {
        img: "https://lmt.com.vn/wp-content/uploads/2014/10/10-buoc-de-bien-chan-dung-cua-ban-thanh-anh-hoat-hinh-14.jpg",
        title: "Lớp hoá 10 thứ 2 19h-21h",
        description: "GV: Cô tóc ngắn\nLớp: 10\nThời gian: 19h-21h thứ 2",
        key: 3
    },
    {
        img: "https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-cartoon-man-avatar-free-illustration-image_1375256.jpg",
        title: "Lớp hoá 10 thứ 3 19h-21h",
        description: "GV: Thầy đội mũ\nLớp: 10\nThời gian: 19h-21h thứ 3",
        key: 4
    },
    {
        img: "https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-cartoon-man-avatar-free-illustration-image_1375256.jpg",
        title: "Lớp hoá 10 thứ 4 19h-21h",
        description: "GV: Thầy đội mũ\nLớp: 10\nThời gian: 19h-21h thứ 4",
        key: 5
    },
    {
        img: "https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-cartoon-man-avatar-free-illustration-image_1375256.jpg",
        title: "Lớp hoá 10 thứ 5 19h-21h",
        description: "GV: Thầy đội mũ\nLớp: 10\nThời gian: 19h-21h thứ 5",
        key: 6
    },
]

export default function ListTeacher() {
    const renderDescription = (des) => {
        const list = des.split("\n");
        return list.map(item => <div key={item}>{item}</div>
        )
    }
    return (
        <Main
            footerText={"Created by DucPV"}
            links={["Danh sách giáo viên"]}
            tab={4}
        >
            <div className="d-flex justify-content-center flex-wrap">
                {listCard.map((item, index) =>
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
