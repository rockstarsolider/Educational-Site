import './Header.css';
import Button from "./Button";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to='/' className="txt-decor color-black">
                <div className="Logo-title">
                    <h2>MindDev</h2>
                </div>
            </Link>
            <div className="button-container">
                <Link to='/Educational-Site/LoginPage'><Button secondary>ورود</Button></Link>
                <Link to= '/Educational-Site/SingUp'><Button primary>ثبت نام</Button></Link>
            </div>
        </div>
    );
}

export default Header;