import "./Question1.css"
import { Link } from "react-router-dom";


function Question4(){
    return(
        <div>
            <h2 className="Question"> کدام موضوع را می خواهید بررسی کنید؟</h2>
            <button className="other-answer">ریاضی</button>
            <button className="other-answer">علوم و مهندسی</button>
            <button className="other-answer">علوم کامپیوتر و برنامه نویسی</button>
            <button className="other-answer">تجزیه و تحلیل داده ها و احتمالات</button>
            <Link to='/Educational-Site/UserPage'><button className="continue">ورود</button></Link>


        </div>
    )
}
export default Question4;