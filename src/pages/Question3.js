import learning from "../style/learning-education-word-letters 1.png"
import "./Question1.css"
import { Link } from "react-router-dom";
import "./PricingPage.css";
function Question3 (){
    const Button= ()=>{
        return(
            <Link to='/Educational-Site/Question4'><button className="continue">ادامه</button></Link>

        )
    }
    const Section = ({ head, p, pic, classn }) => {
        return (
            <div className={classn}>
                <img src={pic} alt='pic' />
                <div className='width'>
                    <h2>{head}</h2>
                    <br />
                    <p>{p}</p>
                </div>
            </div>
        );
    };
    return(
        <div>
        <Section head=' یادگیری در Learn plus موثر و سرگرم کننده هست' p=' شما را با مفاهیم ریاضی، علوم و علوم کامپیوتر آشنا می کند. شما مشکلات سرگرم کننده را حل خواهید کرد در حالی که مهارت های تفکر انتقادی خود را رشد می دهید.
         یاد گرفتن است' pic={learning} classn='intro'></Section>
         <Button></Button>
         </div>
    )

}
export default Question3;