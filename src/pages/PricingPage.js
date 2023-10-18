import "../style/HTML.css";
import "./PricingPage.css";
import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import im1 from "../style/Free.png";
import im2 from "../style/Vip.png";
import im3 from "../style/im12.png";
import im4 from "../style/im2.png";
import im5 from "../style/im3.png";
import im6 from "../style/ok.png";
import im7 from "../style/no.png";

import im10 from "../style/logic.png";

function PricingPage() {
  const Intro = () => {
    return (
      <div className="Up-title">
        <h1 className="title-1">تجربه عالی یاد گیری با ما</h1>
        <p className="p-1">
          دسترسی نا محدود به تمام دوره های ریاضی, علوم و علوم کامپیوتر داشته
          باشید
        </p>
      </div>
    );
  };
  const Box = () => {
    return (
      <div className="Allcard">
        <div className="box">
          <div className="rectangle">
            <div className="box-up">
              <div className="rectangle-up">
                <div className="text-wrapper-up">ماهانه</div>
                <div className="mony">
                  19.00<span>/ماه</span>
                </div>
                <button className="btn-1">خرید اشتراک</button>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="rectangle">
            <div className="rectangle">
              <div className="box-up-blue">
                <div className="rectangle-up-blue">
                  <div className="text-wrapper-up-blue">سالانه</div>
                  <div className="mony">
                    13.00<span>/ماه</span>
                  </div>
                  <button className="btn-1">خرید اشتراک</button>
                </div>
              </div>
            </div>
          </div>
          <div className="lable"></div>
        </div>
        <div className="box">
          <div className="rectangle">
            <div className="box-up">
              <div className="rectangle-up">
                <div className="text-wrapper-up">مادام العمر</div>
                <div className="mony">
                  349.00<span></span>
                </div>
                <button className="btn-1">خرید اشتراک</button>
              </div>
            </div>
          </div>
          <div className="lable"></div>
        </div>
      </div>
    );
  };
  const Titletwo = () => {
    return (
      <div className="label-2">
        <p className="title-2">این سایت برای چه کسانی است؟</p>
      </div>
    );
  };
  const Boximg = () => {
    return (
      <div className="All-box-img">
        <div className="box-img">
          <div className="rectangle-img">
            <img src={im5} className="img-1" />
            <div>
              <h3 className="studant">دانش اموزان</h3>
            </div>
            <div>
              <p className="p-img">
                تسلط بر مفاهیم از طریق حل مسئله در ریاضیات، علوم و علوم
                کامپیوتر. به جای به خاطر سپردن فرمول ها، شهود بسازید.
              </p>
            </div>
          </div>
        </div>
        <div className="box-img">
          <div className="rectangle-img">
            <img src={im4} className="img-2" />
            <div>
              <h3 className="studant">حرفه ای ها</h3>
            </div>
            <div>
              <p className="p-img">
                پایگاه دانش خود را تازه نگه دارید و برای مصاحبه های کمی آماده
                شوید. موضوعاتی از احتمال تا علوم کامپیوتر تا یادگیری ماشین را
                کاوش کنید.
              </p>
            </div>
          </div>
        </div>
        <div className="box-img">
          <div className="rectangle-img">
            <img src={im3} className="img-3" />
            <div>
              <h3 className="studant">یادگیرندگان مادام العمر</h3>
            </div>
            <div>
              <p className="p-img">
                از بین تمرینات سرگرم کننده و هدایت شده در صدها موضوع جالب انتخاب
                کنید. ذهن خود را فعال نگه دارید و مهارت های تفکر انتقادی را
                بهبود بخشید.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Freevip = () => {
    return (
      <div>
        <p className="Free">دسترسی های پولی و رایگان</p>
      </div>
    );
  };
  const FreeVipcard = () => {
    return (
      <div className="Free-vip-card">
        <div className="box-Free-vip">
          <div className="rectangle-Free-vip">
            <img src={im1} className="img-free" />
            <div className="Free-tit">!رایگان</div>
            <p className="Free-p">.پیش نمایش رایگان هر دوره را امتحان کنید</p>
            <img src={im7} className="no" />
            <p className="All-courses">دسترسی به تمام دوره ها</p>
            <img src={im7} className="no" />
            <p className="All-courses">دروس پایه ریاضی</p>
            <img src={im7} className="no" />
            <p className="All-courses">دروس ریاضی پیشرفته</p>
            <img src={im7} className="no" />
            <p className="All-courses">دوره های علوم</p>
            <img src={im7} className="no" />
            <p className="All-courses">دوره های علوم کامپیوتر</p>
            <img src={im7} className="no" />
            <p className="All-courses">CSپاداش ریاضی، علوم، و پازل</p>
          </div>
        </div>
        <div className="box-Free-vip">
          <div className="rectangle-Free-vip">
            <img src={im2} className="img-free" />
            <div className="Free-tit">!ویژه</div>
            <p className="Free-p">تمامی دروس و قابلیت ها را باز می کند</p>
            <img src={im6} className="no" />
            <p className="All-courses">دسترسی به تمام دوره ها</p>
            <img src={im6} className="no" />
            <p className="All-courses">دروس پایه ریاضی</p>
            <img src={im6} className="no" />
            <p className="All-courses">دروس ریاضی پیشرفته</p>
            <img src={im6} className="no" />
            <p className="All-courses">دوره های علوم</p>
            <img src={im6} className="no" />
            <p className="All-courses">دوره های علوم کامپیوتر</p>
            <img src={im6} className="no" />
            <p className="All-courses">CSپاداش ریاضی، علوم، و پازل</p>
          </div>
        </div>
      </div>
    );
  };

  const Droptext = () => {
    return (
      <div>
        <p className="Drop-title">چه چیزی میتوانیم در این سایت بگیریم؟</p>
      </div>
    );
  };

  const Allcorses1 = () => {
    return (
      <div className="box-8">
        <div className="rectangle-8">
          <p className="Math-1">ریاضی پایه</p>
          <hr className="Line-1" />
          <div className="flexing">
            <div>
              <img src={im10} className="Logic" />
              <p className="Logic-p">منطق</p>
              <img
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic_II-Pdrn7X.png?width=20"
                className="Logic"
              />
              <p className="Logic-p">2 منطق</p>
              <img
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/First_Choice_1-Bx5Qz6.png?width=20"
                className="Logic"
              />
              <p className="Logic-p">ریاضی روزانه</p>
              <img
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/joy_of_problem_solving-e0Vf8J.png?width=20"
                className="Logic"
              />
              <p className="Logic-p">قدرت حل مسئله</p>
            </div>
            <div>
              <img
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/number_theory-ypfqcB.png?width=20"
                className="Logic"
              />
              <p className="Logic-p">تئوری اعداد</p>
              <img
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/infinity-ZumyiA.png?width=20"
                className="Logic"
              />
              <p className="Logic-p">بینهایت</p>
              <img
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_history-f7pDr1.png?width=20"
                className="Logic"
              />
              <p className="Logic-p">تاریخ ریاضیات</p>
              <img
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/random_variables_and_distributions-Ny6w3J.png?width=20"
                className="Logic"
              />
              <p className="Logic-p">متغیر ها</p>
            </div>
          </div>
          <p className="Math-1">علوم</p>
          <hr className="Line-1" />
          <div className="flexing">
            <div>
              <img
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/scientific_thinking_960_by_960-CICqcg.png?width=20"
                className="Logic"
              />
              <p className="Logic-p">تفکر علمی</p>
              <img
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/science_essentials-GkPf0c.png?width=20"
                className="Logic"
              />
              <p className="Logic-p">پایه های علوم</p>
            </div>
            <div>
              <img
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/electricity_and_magnetism-rJijqR.png?width=20"
                className="Logic"
              />
              <p className="Logic-p">الکتریسیته و مغناطیس</p>
              <img
                src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/the_chemical_reaction-JsXxfp.png?width=20"
                className="Logic"
              />
              <p className="Logic-p">واکنش های شیمیایی</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  return (
    <div>
      <Header />
      <div className="pricing-page">
        <Intro />
        <Box />
        <Titletwo />
        <Boximg />
        <Freevip />
        <FreeVipcard />
        <Droptext />
        <Allcorses1 />
      </div>
      <Footer />
    </div>
  );
}

export default PricingPage;
