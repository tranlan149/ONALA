import './style.css';
import logo from "../../image/logo.png"
function Recommend(){
    return(
        <>
            <div className='recommend'>
                <img src={logo}></img>
                <div className='text'>
                    <h2>Giới thiệu </h2>
                    <p></p>
                </div>
            </div>
            
        </>
    )
}
export default Recommend;