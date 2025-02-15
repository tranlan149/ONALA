import Login from "../Login";
import UserManagement from "../UserManagement";
function AccountPage() {
    const isLogin = true;
    return ( 
        <>
            {isLogin ? <UserManagement/> : <Login/>}
            
        </>
    );
}

export default AccountPage;