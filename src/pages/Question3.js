import {Link} from 'react-router-dom'

function Question3 (){
    return(
        <div>
        <div className="about">
            <h2 >موثر و سرگرم کننده است  LearnPlus یادگیری در</h2>
            <p> شما را با مفاهیم ریاضی، علوم و علوم کامپیوتر آشنا می کند. شما</p>
            <p>مشکلات سرگرم کننده را حل خواهید کرد در حالی که مهارت های تفکر</p>
            <p>انتقادی خود را رشد می دهید.</p>
        </div>
        <Link to='/Educational-Site/Question4 '  className="next">ادامه</Link>
        </div>
    )
}
export default Question3;