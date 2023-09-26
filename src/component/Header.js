import Button from "./Button";
import { Link } from 'react-router-dom';
import Logo from "../style/Site Icon.png";

function Header() {
    return (
        <div className="header">
            <Link to='/' className="txt-decor color-black">
                <div className="Logo-title">
                    <img src={Logo} alt="site logo"></img>
                    <h2>LearnPlus</h2>
                </div>
            </Link>
            <div className="button-container">
                <Link to='/Educational-Site/loginpage'><Button secondary>ورود</Button></Link>
                <Link to='/Educational-Site/SingupPage'><Button primary>ثبت نام</Button></Link>
            </div>
        </div>
    );
}

export default Header;