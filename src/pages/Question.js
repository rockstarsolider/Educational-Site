import Box from "./LoginPage"
import Header from '../component/Header';
import Footer from '../component/Footer';
import {Link} from 'react-router-dom'
function Question (){
    return(
        <div>
        <div className="Question">کدام گزینه شما را بهتر تو صیف می کند</div>
        <button className='m1'> حرفه ای                  </button>
        <button className='m1'>دانشجو یا به زودی ثبت نام می شود</button>
        <button className='m1'>یادگیرنده مادام العمر</button>
        <button className='m1'> معلم</button>
        <button className='m1'> دیگر</button>
        <div className='next1'><Link to='/Educational-Site/Question2 ' >ادامه</Link></div>
        </div>
    )
}
export default Question;