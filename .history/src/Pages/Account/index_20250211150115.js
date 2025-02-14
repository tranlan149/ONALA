import Login from "../Login";
import 
function AccountPage() {
    const isLogin = false;
    return ( 
        <>
            {isLogin?<></>:<Login/>}
        </>
    );
}

export default AccountPage;