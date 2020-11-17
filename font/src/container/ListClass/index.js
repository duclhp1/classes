import Main from "../../component/Main";
import {Card, Button} from "antd";
const { Meta } = Card;

const listCard = [
    {
        img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        title: "Card Title",
        description: "description",
        buttonTitle: "Go somewhere",
        key: 1
    },
    {
        img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        title: "Card Title",
        description: "description",
        buttonTitle: "Go somewhere",
        key: 2
    },
    {
        img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        title: "Card Title",
        description: "description",
        buttonTitle: "Go somewhere",
        key: 3
    },
    {
        img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        title: "Card Title",
        description: "description",
        buttonTitle: "Go somewhere",
        key: 1
    },
    {
        img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        title: "Card Title",
        description: "description",
        buttonTitle: "Go somewhere",
        key: 2
    },
    {
        img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        title: "Card Title",
        description: "description",
        buttonTitle: "Go somewhere",
        key: 3
    },
    {
        img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        title: "Card Title",
        description: "description",
        buttonTitle: "Go somewhere",
        key: 1
    },
    {
        img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        title: "Card Title",
        description: "description",
        buttonTitle: "Go somewhere",
        key: 2
    },
    {
        img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        title: "Card Title",
        description: "description",
        buttonTitle: "Go somewhere",
        key: 3
    },
    {
        img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        title: "Card Title",
        description: "description",
        buttonTitle: "Go somewhere",
        key: 1
    },
    {
        img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        title: "Card Title",
        description: "description",
        buttonTitle: "Go somewhere",
        key: 2
    },
    {
        img: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        title: "Card Title",
        description: "description",
        buttonTitle: "Go somewhere",
        key: 3
    },
]

export default function ListClass() {
    return (
        <Main
            footerText={"Created by DucPV"}
            links={["Danh sách lớp"]}
        >
            <div className="d-flex justify-content-center flex-wrap">
                {listCard.map((item, index) =>
                    <Card
                        key={index}
                        hoverable
                        style={{ width: 240, margin: 10 }}
                        cover={<img alt="example" src={item.img} />}
                        actions={[
                            <Button
                                type="primary"
                                key={0}
                                href="/class"
                            >Button</Button>
                        ]}
                    >
                        <Meta title={item.title} description={item.description} />
                    </Card>)}
            </div>
        </Main>
    )
}
