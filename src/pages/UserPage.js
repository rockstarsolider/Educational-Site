import "./UserPage.css";
import Header2 from "../component/Header2";
import Button from "../component/Button";
import Image1 from "../style/image 11 (1).png";
import Image2 from "../style/image 11 (2).png";
import SearchBar from "../component/SearchBar";
import { Link } from "react-router-dom";

function UserPage() {
    const UserProp = () => {
        return (
            <div>
                <div className="searching"><SearchBar/></div>
                <h3 className="welcome">خوش آمدید</h3>
                <div className="first-part">
                    <div className="premium-con">
                        <p>کاربران اشتراک ویژه نسبت به بقیه افراد 6 برابر موفق تر بوده اند</p>
                        <Link to='/Educational-Site/pricing'><Button primary>بیشتر بدانید</Button></Link>
                    </div>
                    <div className='user-props'>
                        <div>
                            <h3>اولین قدم هایتان در یاد گرفتن را بردارید</h3>
                            <p>اولین درستان را شروع کنید</p>
                            <p>اولین درستان را با موفقیت تمام کنید</p>
                        </div>
                        <div className="prog-bar"><h2>13</h2></div>
                    </div>
                </div>
            </div>
        );
    };

    const ToContinue = () => {
        return (
            <div className="to-con">
                <div className="container1-hp">
                    <p>مسابقات</p>
                    <div className="border-area border-area1">
                        <img src={Image1}></img>
                        <h3>قفل مسابقات را باز کنید</h3>
                        <p>برای باز کردن قفل شرکت در مسابقات باید 150 امتیاز به دست بیاورید</p>
                    </div>
                </div>
                <div className="container1-hp">
                    <p>درس هایتان را ادامه دهید</p>
                    <div className="border-area border-area2">
                        <img src={Image2}></img>
                        <h3>منطق ترتیبی</h3>
                        <p>درس 1 از 28</p>
                        <Link to='/Educational-Site/learning-road'><Button primary>شروع درس</Button></Link>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="user-page">
            <Header2 />
            <UserProp />
            <ToContinue />
        </div>
    );
}

export default UserPage;