import "./Email.css"
import { Link } from "react-router-dom";



function Email(){
    return(
        <div>
            <input className="email1" placeholder=" ایمیل"></input>
            <input className="other1" placeholder=" گذرواژه" ></input>
            <Link to='/Educational-Site/UserPage'><button className="login-b">ورود</button></Link>
        </div>
    )
}
export default Email;