import "./Email.css"
import { Link } from "react-router-dom";



function Email(){
    return(
        <div>
            <h2 className="Login-1">ورود</h2>
            <input className="email1" placeholder=" ایمیل"></input>
            <input className="other1" placeholder=" گذرواژه" ></input>
            <Link to='/Educational-Site/UserPage'><button className="login-">ورود</button></Link>
        </div>
    )
}
export default Email;