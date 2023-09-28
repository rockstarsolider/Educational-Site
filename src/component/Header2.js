import './Header2.css';
import Button from "./Button";
import { Link } from 'react-router-dom';
import { TbMenu2, TbHome, TbPaperBag, TbSearch } from 'react-icons/tb';
import SearchBar from './SearchBar'

function Header2() {
    return (
        <div className="header2">
            <h2>LearnPlus</h2>
            <div className="icon-container">
                <TbHome className="icon2" />
                <Link to='/Educational-Site/userpage' className="color-black txt-decor txt-hide"><p>خانه</p></Link>
            </div>
            <div className="icon-container">
                <TbPaperBag className="icon2" />
                <Link to='/Educational-Site/courses-page' className="color-black txt-decor txt-hide"><p>دروس</p></Link>
            </div>
            <div className='search-hide'><SearchBar/></div>
            <Link to='/Educational-Site/pricing' className='txt-hide'><Button primary>اشتراک ویژه</Button></Link>
            <TbMenu2 className="icon2" />
        </div>
    );
}

export default Header2;