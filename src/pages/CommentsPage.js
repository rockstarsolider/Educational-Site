import './CommentsPage.css';
import './PricingPage.css';
import Button from "../component/Button";
import Header from "../component/Header";
import Footer from "../component/Footer";
import star1 from "../style/Starcom.png";
import star2 from "../style/Star5.png";
import up2 from "../style/up2.png";
import Fireup from "../style/Fireup.png";
import photo12 from "../style/photo12.png";
import photo13 from "../style/photo13.png";

function componentPage() {
  const Tit1 = () => {
    return (
      <div>
        <p className="tit-1-com">ما در حال ساخت</p>
        <p className="tit-1-com">بهترین مکان روی زمین برای یادگیری</p>
        <p className="tit-1-com">ریاضی و علوم</p>
        <p className="p-1-com">
          .در این فرایند، ما خوشحال شده ایم که عشق زیادی از کاربران خود دریافت
          کنیم
        </p>
      </div>
    );
  };

  const Commeline = () => {
    return (
      <div>
        <hr className="Line-com1" />
      </div>
    );
  };

  const Commetit = () => {
    return (
      <div className="Star-tit">
        <p className="tit-star-1">نظـــرات کــاربــران</p>
        <p className="p-star-1">
          بیش از 50,000 بررسی 5 ستــاره در فروشگــاه اپ استور و پلی استور
        </p>
        <img src={star1} className="Star1" />
      </div>
    );
  };

  const Acco = () => {
    return (
      <div className="All-button-com">
        <button className="All">برجسته: همه</button>
        <button className="All-1">همه</button>
        <button className="All-2">دانشجویان</button>
        <button className="All-3">حرفه ای ها</button>
        <button className="All-4">والدین</button>
        <button className="All-5">زبان اموزان مادام العمر</button>
      </div>
    );
  };

  const Commen = () => {
    return (
      <div className="imgup-comment">
        <hr className="Line-img" />
        <img src={star2} className="Star3" />
        <p className="Chat">دانیال برزگر</p>
        <p className="p-Chat">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد،
        </p>
        <hr className="Line-img" />
        <img src={star2} className="Star3" />
        <p className="Chat">علی رضا</p>
        <p className="p-Chat">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد،
        </p>
        <hr className="Line-img" />
        <img src={star2} className="Star3" />
        <p className="Chat">پوریا</p>
        <p className="p-Chat">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد،
        </p>
        <hr className="Line-img" />
        <img src={star2} className="Star3" />
        <p className="Chat">مبین</p>
        <p className="p-Chat">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد،
        </p>
        <img src={Fireup} className='img-up-1' />
      </div>
    );
  };

  const Linedown = () => {
    return (
      <div>
        <hr className="Line-down" />
      </div>
    );
  };

  const Endcomment = () => {
    return (
      <div className="End">
        <Button primary>شروع کنید</Button>
        <p className="End-p">
          LearnPlus پیوستن به بیش از 10 میلیون نفر یادگیری در
        </p>
      </div>
    );
  };

  return (
    <div >
      <Header />
      <Tit1 />
      <Commeline />
      <Commetit />
      <Acco />
      <Commen />
      <Linedown />
      <Endcomment />
      <Footer />
    </div>
  );
}



export default componentPage;
