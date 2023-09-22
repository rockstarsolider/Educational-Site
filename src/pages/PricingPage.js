// import React, { useState } from "react";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import Button from "../component/Button";
// import "../style/component.css";
// import im1 from "../style/Free.png";
// import im2 from "../style/Vip.png";
// import im3 from "../style/im12.png";
// import im4 from "../style/im2.png";
// import im5 from "../style/im3.png";
// import im6 from "../style/ok.png";
// import im7 from "../style/no.png";
// import im8 from "../style/pix-devices.png";
// import im9 from "../style/geometry.png";
// import im10 from "../style/logic.png";

// function PricingPage() {
//   const Intro = () => {
//     return (
//       <div className="Up-title">
//         <h1 className="title-1">تجربه عالی یاد گیری با ما</h1>
//         <p className="p-1">
//           دسترسی نا محدود به تمام دوره های ریاضی, علوم و علوم کامپیوتر داشته
//           باشید
//         </p>
//       </div>
//     );
//   };
//   const Box = () => {
//     return (
//       <div className="Allcard">
//         <div className="box">
//           <div className="rectangle">
//             <div className="box-up">
//               <div className="rectangle-up">
//                 <div className="text-wrapper-up">ماهانه</div>
//                 <div className="mony">
//                   1.300<span>/ماه</span>
//                 </div>
//                 <button className="btn-1">خرید اشتراک</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="box">
//           <div className="rectangle">
//             <div className="rectangle">
//               <div className="box-up-blue">
//                 <div className="rectangle-up-blue">
//                   <div className="text-wrapper-up-blue">سالانه</div>
//                   <div className="mony">
//                     1.300<span>/ماه</span>
//                   </div>
//                   <button className="btn-1">خرید اشتراک</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="lable"></div>
//         </div>
//         <div className="box">
//           <div className="rectangle">
//             <div className="box-up">
//               <div className="rectangle-up">
//                 <div className="text-wrapper-up">مادام العمر</div>
//                 <div className="mony">
//                   1.300<span>/ماه</span>
//                 </div>
//                 <button className="btn-1">خرید اشتراک</button>
//               </div>
//             </div>
//           </div>
//           <div className="lable"></div>
//         </div>
//       </div>
//     );
//   };
//   const Titletwo = () => {
//     return (
//       <div className="label-2">
//         <p className="title-2">این سایت برای چه کسانی است؟</p>
//       </div>
//     );
//   };
//   const Boximg = () => {
//     return (
//       <div className="All-box-img">
//         <div className="box-img">
//           <div className="rectangle-img">
//             <img src={im5} className="img-1" />
//             <div>
//               <h3 className="studant">دانش اموزان</h3>
//             </div>
//             <div>
//               <p className="p-img">
//                 تسلط بر مفاهیم از طریق حل مسئله در ریاضیات، علوم و علوم
//                 کامپیوتر. به جای به خاطر سپردن فرمول ها، شهود بسازید.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="box-img">
//           <div className="rectangle-img">
//             <img src={im4} className="img-2" />
//             <div>
//               <h3 className="studant">حرفه ای ها</h3>
//             </div>
//             <div>
//               <p className="p-img">
//                 پایگاه دانش خود را تازه نگه دارید و برای مصاحبه های کمی آماده
//                 شوید. موضوعاتی از احتمال تا علوم کامپیوتر تا یادگیری ماشین را
//                 کاوش کنید.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="box-img">
//           <div className="rectangle-img">
//             <img src={im3} className="img-3" />
//             <div>
//               <h3 className="studant">یادگیرندگان مادام العمر</h3>
//             </div>
//             <div>
//               <p className="p-img">
//                 از بین تمرینات سرگرم کننده و هدایت شده در صدها موضوع جالب انتخاب
//                 کنید. ذهن خود را فعال نگه دارید و مهارت های تفکر انتقادی را
//                 بهبود بخشید.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const Freevip = () => {
//     return (
//       <div>
//         <p className="Free">دسترسی های پولی و رایگان</p>
//       </div>
//     );
//   };
//   const FreeVipcard = () => {
//     return (
//       <div className="Free-vip-card">
//         <div className="box-Free-vip">
//           <div className="rectangle-Free-vip">
//             <img src={im1} className="img-free" />
//             <div className="Free-tit">!رایگان</div>
//             <p className="Free-p">.پیش نمایش رایگان هر دوره را امتحان کنید</p>
//             <img src={im7} className="no" />
//             <p className="All-courses">دسترسی به تمام دوره ها</p>
//             <img src={im7} className="no" />
//             <p className="All-courses">دروس پایه ریاضی</p>
//             <img src={im7} className="no" />
//             <p className="All-courses">دروس ریاضی پیشرفته</p>
//             <img src={im7} className="no" />
//             <p className="All-courses">دوره های علوم</p>
//             <img src={im7} className="no" />
//             <p className="All-courses">دوره های علوم کامپیوتر</p>
//             <img src={im7} className="no" />
//             <p className="All-courses">CSپاداش ریاضی، علوم، و پازل</p>
//           </div>
//         </div>
//         <div className="box-Free-vip">
//           <div className="rectangle-Free-vip">
//             <img src={im2} className="img-free" />
//             <div className="Free-tit">!رایگان</div>
//             <p className="Free-p">.پیش نمایش رایگان هر دوره را امتحان کنید</p>
//             <img src={im6} className="no" />
//             <p className="All-courses">دسترسی به تمام دوره ها</p>
//             <img src={im6} className="no" />
//             <p className="All-courses">دروس پایه ریاضی</p>
//             <img src={im6} className="no" />
//             <p className="All-courses">دروس ریاضی پیشرفته</p>
//             <img src={im6} className="no" />
//             <p className="All-courses">دوره های علوم</p>
//             <img src={im6} className="no" />
//             <p className="All-courses">دوره های علوم کامپیوتر</p>
//             <img src={im6} className="no" />
//             <p className="All-courses">CSپاداش ریاضی، علوم، و پازل</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const Droptext = () => {
//     return (
//       <div>
//         <p className="Drop-title">چه چیزی میتوانیم در این سایت بگیریم؟</p>
//       </div>
//     );
//   };

//   const Allcorses1 = () => {
//     return (
//       <div className="box-8">
//         <div className="rectangle-8">
//           <p className="Math-1">ریاضی پایه</p>
//           <hr className="Line-1" />
//           <img src={im10} className="Logic" />
//           <p className="Logic-p">منطق</p>
//           <img src={im10} className="Logic" />
//           <p className="Logic-p">منطق</p>
//           <img src={im10} className="Logic" />
//           <p className="Logic-p">منطق</p>
//           <img src={im10} className="Logic" />
//           <p className="Logic-p">منطق</p>
//           <img src={im10} className="Logic" />
//           <p className="Logic-p">منطق</p>
//           <img src={im10} className="Logic" />
//           <p className="Logic-p">منطق</p>
//           <img src={im10} className="Logic" />
//           <p className="Logic-p">منطق</p>
//           <img src={im10} className="Logic" />
//           <p className="Logic-p">منطق</p>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <Header />
//       <Intro />
//       <Box />
//       <Titletwo />
//       <Boximg />
//       <Freevip />
//       <FreeVipcard />
//       <Droptext />
//       <Allcorses1 />
//       <Footer />
//     </div>
//   );
// }

// export default PricingPage;
