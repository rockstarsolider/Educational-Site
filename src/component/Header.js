import Button from "./Button";
import {Link} from 'react-router-dom'

function Header(){
    return(
        <div className="header">
            <Link to='/' className="txt-decor color-black"><h2>LearnPlus</h2></Link>
            <div className="button-container">
                <Button secondary>ورود</Button>
                <Button primary>ثبت نام</Button>
            </div>
        </div>
    )    
}

export default Header