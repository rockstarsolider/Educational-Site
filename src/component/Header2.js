import Button from "./Button";
import {Link} from 'react-router-dom'
import { TbMenu2, TbHome, TbPaperBag, TbSearch } from 'react-icons/tb';

function Header2(){
    return(
        <div className="header2">
            <h2>LearnPlus</h2>
            <div className="icon-container">
                <TbHome className="icon2"/>
                <p>خانه</p>
            </div>
            <div className="icon-container">
                <TbPaperBag className="icon2"/>
                <p>دروس</p>
            </div>
            <div className="search-bar"><TbSearch className="icon3"/></div>
            <Button primary>اشتراک ویژه</Button>
            <TbMenu2 className="icon2"/>
        </div>
    )    
}

export default Header2