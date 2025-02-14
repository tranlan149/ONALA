
function UserManagement() {
    return (
        <div>
            <Layout>
                <Header>header</Header>
                <Layout>
                    <Sider>left sidebar</Sider>
                    <Content>main content</Content>
                    <Sider>right sidebar</Sider>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        </div>
    );
}

export default UserManagement;