import '../style/component.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className='row1'>
                <p className='logo'>LearnPlus</p>
                <p>ما به شما کمک میکنیم تا هرچیزی را یاد بگیرید</p>
            </div>
            <div className='row2'>
                <div className='column1'>
                    <Link to='/Educational-Site/comments' className='link'>نظرات</Link>
                    <Link to='/Educational-Site/principles' className='link'>اصول</Link>
                </div>
                <div className='column2'>
                    <Link to='/Educational-Site/about' className='link'>درباره ما</Link><br/>
                    <Link to='/Educational-Site/pricing' className='link'>قیمت گذاری</Link><br/>
                    <Link to='/Educational-Site/courses-page' className='link'>دوره ها</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;