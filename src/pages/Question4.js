import {Link} from 'react-router-dom'


function Question4 (){
    return(
        <div>
                    <div className="Question">کدام موضوع را می خواهید بررسی کنید؟</div>
                    <button className='m1'>ریاضی</button>
                    <button className='m1'>علوم و مهندسی</button>
                    <button className='m1'>علوم کامپیوتر و برنامه نویسی</button>
                    <button className='m1'>تجزیه و تحلیل داده ها و احتمالات</button>
                    <Link to='/' className='next' >ادامه</Link>
        </div>
    )
}
export default Question4;