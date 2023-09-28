import "./SingUp.css"
import { Link } from "react-router-dom";
function SingUp (){
    return(
        <div>
            <input className="email" placeholder=" ایمیل"></input>
            <input className="other" placeholder=" گذرواژه" ></input>
            <input className="name1" placeholder="نام خانوادگی"></input>
            <input className="name" placeholder="نام"></input>
            <input className="other" placeholder="سن"></input>
            <Link to= '/Educational-Site/LoginPage' className="link"><button className="login-b">ثبتنام</button></Link>
            
        </div>
    )
}
export default SingUp;