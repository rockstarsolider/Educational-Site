import './CommentsPage.css';
import './PricingPage.css';
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import star1 from "../style/Starcom.png";
import star2 from "../style/Star5.png";
import up2 from "../style/up2.png";
import starship from '../style/starship.png'
import {Link} from 'react-router-dom'
import { useCallback } from 'react';
import { useState } from 'react';

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
        <img src='https://brilliant.org/site_media/version-4bcbc6ac77/images/company/testimonials/testimonials-review-stars-2x.gif' className="Star1" />
      </div>
    );
  };

  const Acco = () => {
    return (
      <div className="All-button-com">
        <a href='/Educational-Site/comments#teacher' className='txt-decor'><button className="All-1">معلمان</button></a>
        <a href='/Educational-Site/comments#students' className='txt-decor'><button className="All-2">دانشجویان</button></a>
        <a href='/Educational-Site/comments#olds' className='txt-decor'><button className="All-3">حرفه ای ها</button></a>
        <a href='/Educational-Site/comments#parents' className='txt-decor'><button className="All-4">والدین</button></a>
        <a href='/Educational-Site/comments#infinit' className='txt-decor'><button className="All-5">زبان اموزان مادام العمر</button></a>
      </div>
    );
  };

  const Commen = () => {
    return (
      <div className="starship">
        <img className='starship' src={starship} />
        <div className="imgup-comment">
          <div id="teacher" className="paragraph">
            <hr className="Line-img" />
            <img src={star2} className="Star3" />
            <p className="Chat">آقای رضایی</p>
            <p className="Chat-p-p">معلم</p>
            <p className="p-Chat">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد،
            </p>
          </div>
          <div id="students" className="paragraph">
            <hr className="Line-img" />
            <img src={star2} className="Star3" />
            <p className="Chat">علی احمدی</p>
            <p className="Chat-p-p"> دانشجو</p>
            <p className="p-Chat">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد،
            </p>
          </div>
          <div id="olds" className="paragraph">
            <hr className="Line-img" />
            <img src={star2} className="Star3" />
            <p className="Chat">مهندس جعفری</p>
            <p className="Chat-p-p">مهندس برق</p>
            <p className="p-Chat">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد،
            </p>
          </div>
          <div id="parents" className="paragraph">
            <hr className="Line-img" />
            <img src={star2} className="Star3" />
            <p className="Chat">اکبر مرادی</p>
            <p className="Chat-p-p">دکتر</p>
            <p className="p-Chat">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد،
            </p>
          </div>
          <div id="infinit" className="paragraph">
            <hr className="Line-img" />
            <img src={star2} className="Star3" />
            <p className="Chat">محمد عباسی</p>
            <p className="Chat-p-p">دارای اشتراک مادام العمر</p>
            <p className="p-Chat">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد،
            </p>
          </div>
        </div>
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
        <Link to='/Educational-Site/SingUp'><Button className="Button-End-p" primary>شروع کنید</Button></Link>
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
