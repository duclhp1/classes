import { Layout, Menu, Breadcrumb } from 'antd';
import {
    IdcardOutlined,
    GroupOutlined,
    TeamOutlined,
    LineChartOutlined,
} from '@ant-design/icons';
import {useHistory} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
import {useState} from "react";

function Main({links, footerText, displayContent, children, tab}) {
    const history = useHistory();
    const [collapsed, setCollapsed] = useState(true);

    const onCollapse = coll => {
        setCollapsed(coll);
    };

    const openListClass = () => {
        history.push("/")
    };

    const openListStudent = () => {
        history.push("/students")
    };

    const openAnalytics = () => {
        history.push("/thongke")
    };

    const openSetting = () => {
        history.push("/teachers")
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <Menu theme="dark" defaultSelectedKeys={[`${tab}`]} mode="vertical">
                    <Menu.Item key="1" icon={<GroupOutlined />} onClick={openListClass}>
                        Danh sách lớp
                    </Menu.Item>
                    <Menu.Item key="2" icon={<IdcardOutlined />} onClick={openListStudent}>
                        Danh sách học sinh
                    </Menu.Item>
                    <Menu.Item key="3" icon={<LineChartOutlined />} onClick={openAnalytics}>
                        Thống kê
                    </Menu.Item>
                    <Menu.Item key="4" icon={<TeamOutlined />} onClick={openSetting}>
                        Danh sách giáo viên
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 6px' }}>
                    <Breadcrumb style={{ margin: '6px 0' }}>
                        {links.map((item, index) => <Breadcrumb.Item key={index}><h4>{item}</h4></Breadcrumb.Item>)}
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 0, minHeight: 360 }}>
                        {children || displayContent}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>{footerText}</Footer>
            </Layout>
        </Layout>
    );
}

export default Main;
