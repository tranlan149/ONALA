import Login from "../Login";
function AccountPage() {
    const isLogin = false;
    return ( 
        <>
            {isLogin?<></>:<Login/>}
        </>
    );
}

export default AccountPage;