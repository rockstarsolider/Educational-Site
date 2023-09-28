import "./LoginPage.css"
import { Link } from "react-router-dom";
import rocket from "../style/rocket.webp"
function Login(){ 
        return(
            <div>
                <div>
                    <h2 className="Login"> ورود</h2>
                    <button className="login1">Facebookورودبا </button>
                    <button className="login2">Googleورودبا</button>
                    <Link to='/Educational-Site/Email'><button className="login2">Emailورودبا</button></Link>

                    
                    <h2 className="login-c">New user??<Link to= '/Educational-Site/SingUp' className="login-link">SingUp</Link></h2>
                </div>
            </div>

        )   

}
export default Login;
