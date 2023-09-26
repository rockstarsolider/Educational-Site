import {Link} from 'react-router-dom'


function Question2 (){
    return(
        <div>
                    <div className="Question">کدام گزینه شما را بهتر تو صیف می کند</div>
                    <button className='m1'>یادگیری مهارت های خاص برای پیشرفت شغلی</button>
                    <button className='m1'>کاوش موضوعات جدیدی که به آنها علاقه دارم</button>
                    <button className='m1'>تازه کردن پایه های ریاضی من</button>
                    <button className='m1'>برای تیز ماندن مغزم را تمرین می دهم</button>
                    <button className='m1'>در مدرسه عالی بودن</button>
                    <button className='m1'>یک چیز دیگر</button>
                    <Link to='/Educational-Site/Question3 ' className='next' >ادامه</Link>

        </div>
    )
}
export default Question2;