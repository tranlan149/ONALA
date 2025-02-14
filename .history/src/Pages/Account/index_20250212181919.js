import Login from "../Login";
import UserManagement from "../UserManagement";
function AccountPage() {
    const isLogin = tru;
    return ( 
        <>
            {isLogin ? <UserManagement/> : <Login/>}
        </>
    );
}

export default AccountPage;