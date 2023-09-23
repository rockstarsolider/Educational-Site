import Button from "./Button";
import {Link} from 'react-router-dom'
import { TbMenu2, TbHome, TbPaperBag, TbSearch } from 'react-icons/tb';
import '../style/UserPage.css'

function Header2(){
    return(
        <div className="header2">
            <h2>LearnPlus</h2>
            <div className="icon-container">
                <TbHome className="icon2"/>
                <Link to='/Educational-Site/userpage' className="color-black txt-decor"><p>خانه</p></Link>
            </div>
            <div className="icon-container">
                <TbPaperBag className="icon2"/>
                <Link to='/Educational-Site/courses-page' className="color-black txt-decor"><p>دروس</p></Link>
            </div>
            <div className="search-bar"><TbSearch className="icon3"/></div>
            <Button primary>اشتراک ویژه</Button>
            <TbMenu2 className="icon2"/>
        </div>
    )    
}

export default Header2