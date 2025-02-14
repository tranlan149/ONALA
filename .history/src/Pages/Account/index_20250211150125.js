import Login from "../Login";
import UserManagement from "../UserManagement";
function AccountPage() {
    const isLogin = false;
    return ( 
        <>
            {isLogin? <U:<Login/>}
        </>
    );
}

export default AccountPage;