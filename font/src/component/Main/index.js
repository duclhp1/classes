import { Layout, Menu, Breadcrumb } from 'antd';
import {
    IdcardOutlined,
    GroupOutlined,
    SettingOutlined,
    LineChartOutlined,
} from '@ant-design/icons';
import {useHistory} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
import {useState} from "react"

function Main({links, footerText, displayContent, children}) {
    const history = useHistory();
    const [collapsed, setCollapsed] = useState(true);

    const onCollapse = coll => {
        setCollapsed(coll);
    };

    const openListClass = () => {
        history.push("/classes")
    };

    const openListStudent = () => {
        history.push("/login")
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<GroupOutlined />} onClick={openListClass}>
                        Danh sách lớp
                    </Menu.Item>
                    <Menu.Item key="2" icon={<IdcardOutlined />} onClick={openListStudent}>
                        Danh sách học sinh
                    </Menu.Item>
                    <Menu.Item key="sub1" icon={<LineChartOutlined />} onClick={openListClass}>
                        Thống kê
                    </Menu.Item>
                    <Menu.Item key="9" icon={<SettingOutlined />} onClick={openListClass}>
                        Cài đặt
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {links.map((item, index) => <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>)}
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {children || displayContent}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>{footerText}</Footer>
            </Layout>
        </Layout>
    );
}

export default Main;
