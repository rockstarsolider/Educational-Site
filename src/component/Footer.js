import '../style/component.css';
import { TbBrandTelegram, TbBrandInstagram, TbBrandTwitter } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className='row1'>
                <Link to='/' className='txt-decor color-white'><h2>LearnPlus</h2></Link>
                <p>ما به شما کمک میکنیم تا هرچیزی را یاد بگیرید</p>
            </div>
            <div className='row2'>
                <div className='column1'>
                    <TbBrandTelegram />
                    <TbBrandInstagram />
                    <TbBrandTwitter />
                </div>
                <div className='column2'>
<<<<<<< HEAD
                    <Link to='/about' className='link'>درباره ما</Link><br />
                    <Link to='/pricing' className='link'>قیمت گذاری</Link><br />
=======
                    <Link to='/Educational-Site/about' className='link'>درباره ما</Link><br/>
                    <Link to='/pricing' className='link'>قیمت گذاری</Link><br/>
>>>>>>> e41fe98e67b648155c99f32aedf025e21cebef35
                    <Link to='/courses' className='link'>دوره ها</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;