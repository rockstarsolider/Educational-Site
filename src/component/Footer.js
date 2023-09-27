import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className='row1'>
                <p className='logo'>LearnPlus</p>
                <p className='footer-txt'>ما به شما کمک میکنیم تا هرچیزی را یاد بگیرید</p>
            </div>
            <div className='row2'>
                <div className='column1'>
                    <Link to='/Educational-Site/comments' className='link foot-link'>نظرات</Link>
                    <Link to='/Educational-Site/principles' className='link foot-link'>اصول</Link>
                </div>
                <div className='column2'>
                    <Link to='/Educational-Site/about' className='link foot-link'>درباره ما</Link><br />
                    <Link to='/Educational-Site/pricing' className='link foot-link'>قیمت گذاری</Link><br />
                    <Link to='/Educational-Site/courses-page' className='link foot-link'>دوره ها</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;