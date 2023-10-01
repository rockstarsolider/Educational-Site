import "./Question1.css"
import { Link } from "react-router-dom";


function Question1 (){
    return(
        <div>
            <h2 className="Question">کدام گزینه شما را بهتر تو صیف می کند</h2>
            <button className="other-answer">حرفه ای</button>
            <button className="other-answer">دانشجو یا به زودی ثبت نام می شود</button>
            <button className="other-answer">پدر و مادر یک کودک در سن مدرسه </button>
            <button className="other-answer">یادگیرنده مادام العمر</button>
            <button className="other-answer">معلم</button>
            <button className="other-answer">دیگر</button>
            <Link to='/Educational-Site/Question2'><button className="continue">ادامه</button></Link>

        </div>
    )
}
export default Question1;