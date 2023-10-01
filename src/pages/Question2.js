import "./Question1.css"
import { Link } from "react-router-dom";


function Question2 (){
    return(
        <div>
            <h2 className="Question">به کدامیک بیشتر علاقه دارید ؟</h2>
            <h1 className="about">فقط یکی را انتخاب کنید این به ما کمک می کند <br/> تا  شما را  بیشتر بشناسیم</h1>
            <button className="other-answer"> یادگیری مهارت های خاص برای پیشرفت شغلی</button>
            <button className="other-answer">کاوش موضوعات جدیدی که به آنها علاقه دارم</button>
            <button className="other-answer">تازه کردن پایه های ریاضی من</button>
            <button className="other-answer">برای تیز ماندن مغزم را تمرین می دهم</button>
            <button className="other-answer">در مدرسه عالی بودن</button>
            <button className="other-answer">یک چیز دیگر</button>
            <Link to='/Educational-Site/Question3'><button className="continue">ادامه</button></Link>

        </div>
    )
}
export default Question2;