import "./Email.css"
import { Link } from "react-router-dom";
import Button from '../component/Button';
import rocket from '../style/Screenshot (23).png'


function Email(){
    return(
        <div className="email-page">
            <img className="rocket" src={rocket}/>
            <p className="Login-1">ورود</p>
            <input className="email1" placeholder=" ایمیل"></input>
            <input className="email1" placeholder=" گذرواژه" ></input>
            <Link to='/Educational-Site/UserPage'><Button secondary>ورود</Button></Link>
        </div>
    )
}
export default Email;