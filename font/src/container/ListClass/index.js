import Card from "../../component/Card";

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
        <div className="container-fluid">
            <div className="d-flex justify-content-center flex-wrap">
                {listCard.map(item => <Card title={item.title} description={item.description} buttonTitle={item.buttonTitle} img={item.img} key={item.key} />)}
            </div>
        </div>
    )
}
