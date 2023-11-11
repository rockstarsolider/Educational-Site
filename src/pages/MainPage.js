import "./MainPage.css";
import Header from '../component/Header';
import Footer from '../component/Footer';
import math from '../style/math.png'
import data from '../style/data.png'
import computer from '../style/computer.png'
import programming from '../style/programming.png'
import science from '../style/science.png'
import pic2 from '../style/learning-education-word-letters 1.png';
import pic3 from '../style/pic5.png';
import pic4 from '../style/the-reward-4k-9x 2.png';
import video0 from '../style/landingpage_cs.mp4'
import Button from '../component/Button';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { wait } from "@testing-library/user-event/dist/utils";
import v1 from '../style/v1.mp4'
import v2 from '../style/v2.mp4'
import v3 from '../style/v3.mp4'
import v4 from '../style/v4.mp4'
import v5 from '../style/v5.mp4'
import v6 from '../style/v6.mp4'
import v7 from '../style/v7.mp4'
import v8 from '../style/v8.mp4'
import { gsap } from "gsap";

function MainPage() {
    const info = [
        {
            src: v1,
            title: 'ریاضی پایه',
            one: 'حل معادلات',
            two: 'اندازه گیری',
            three: 'مبانی ریاضی',
            four: 'هندسه',
            five: 'استدلال با جبر',
            six: 'توابع',
        },
        {
            src: v2,
            title: 'توسعه نرم افزار',
            one: 'مبانی علوم کامپیوتر',
            two: 'مقدمه ای بر الگوریتم ها',
            three: 'پایتون',
            four: 'شبکه های عصبی',
        },
        {
            src: v3,
            title: 'علوم',
            one: 'مبانی علوم کامپیوتر',
            two: 'مقدمه ای بر الگوریتم ها',
            three: 'پایتون',
            four: 'شبکه های عصبی',
            five: 'پایتون',
            six: 'شبکه های عصبی',
        },
        {
            src: v4,
            title: 'منظق بنیادی',
            one: 'مبانی علوم کامپیوتر',
            two: 'مقدمه ای بر الگوریتم ها',
            three: 'پایتون',
            four: 'شبکه های عصبی',
        },
        {
            src: v5,
            title: 'علم داده',
            one: 'مبانی علوم کامپیوتر',
            two: 'مقدمه ای بر الگوریتم ها',
            three: 'پایتون',
            four: 'شبکه های عصبی',
        },
        {
            src: v6,
            title: 'ریاضی دبیرستان',
            one: 'مبانی علوم کامپیوتر',
            two: 'مقدمه ای بر الگوریتم ها',
            three: 'پایتون',
            four: 'شبکه های عصبی',
        },
        {
            src: v7,
            title: 'مهندسی',
            one: 'مبانی علوم کامپیوتر',
            two: 'مقدمه ای بر الگوریتم ها',
            three: 'پایتون',
            four: 'شبکه های عصبی',
        },
        {
            src: v8,
            title: 'آمار و امور مالی',
            one: 'مبانی علوم کامپیوتر',
            two: 'مقدمه ای بر الگوریتم ها',
            three: 'پایتون',
            four: 'شبکه های عصبی',
        },
    ]

    const Intro = () => {
        return (
            <div className='intro'>
                <video src={video0} autoPlay loop muted alt='intro' />
                <div className="intro-con">
                    <h2>بهترین روش یادگیری<span className="color-blue"> کدنویسی،خلاقیت و تعامل کاملا رایگان</span></h2>
                    <p>چگونه یک کدنویس حرفه ای شویم؟</p>
                    <p>چگونه خلاقیت خود را افزایش دهیم؟</p>
                    <p>چگونه تعامل با دیگران را یاد بگیریم؟</p>
                    <br />
                    <Link to='/Educational-Site/SingUp' className=""><Button primary>ثبت نام</Button></Link>
                </div>
            </div>
        );
    };

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

    const Card = () => {
        const onEnter = ({ currentTarget }) => {gsap.to(currentTarget, { scale: 1.05 });};
        const onLeave = ({ currentTarget }) => {gsap.to(currentTarget, { scale: 1 });};
        return (
            <div className='cards'>
                <div className='card' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <img src={math} className='icon4' />
                    <Link to='/Educational-Site/math' className='color-black txt-decor'><p>ریاضی</p></Link>
                </div>
                <div className='card' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <img src={data} className='icon4' />
                    <Link to='/Educational-Site/science' className='color-black txt-decor'><p>علوم</p></Link>
                </div>
                <div className='card' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <img src={computer} className='icon4' />
                    <Link to='/Educational-Site/engineering' className='color-black txt-decor'><p>مهندسی</p></Link>
                </div>
                <div className='card' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <img src={programming} className='icon4' />
                    <Link to='/Educational-Site/programming' className='color-black txt-decor'><p>برنامه نویسی</p></Link>
                </div>
                <div className='card' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <img src={science} className='icon4' />
                    <Link to='/Educational-Site/datascience' className='color-black txt-decor'><p>علوم داده</p></Link>
                </div>
            </div>
        );
    };

    const Table = ()=> {
        const [number, setNumber] = useState(0)

        const handleClicking = (event, num) => {
            setNumber(num)
            document.querySelector('.b1').style.border = '1px solid grey'
            document.querySelector('.b2').style.border = '1px solid grey'
            document.querySelector('.b3').style.border = '1px solid grey'
            document.querySelector('.b4').style.border = '1px solid grey'
            document.querySelector('.b5').style.border = '1px solid grey'
            document.querySelector('.b6').style.border = '1px solid grey'
            document.querySelector('.b7').style.border = '1px solid grey'
            document.querySelector('.b8').style.border = '1px solid grey'
            event.currentTarget.style.border = '1px solid orange'
        }

        console.log(number)

        return(
            <>
            <div className="buttons">
                <button type="button" id="b1" className="item b1" onClick={(event) => handleClicking(event, 0)}>{info[0].title}</button>
                <button type="button" id="b2" className="item b2" onClick={(event) => handleClicking(event, 1)}>{info[1].title}</button>
                <button type="button" id="b3" className="item b3" onClick={(event) => handleClicking(event, 2)}>{info[2].title}</button>
                <button type="button" id="b4" className="item b4" onClick={(event) => handleClicking(event, 3)}>{info[3].title}</button>
                <button type="button" id="b5" className="item b5" onClick={(event) => handleClicking(event, 4)}>{info[4].title}</button>
                <button type="button" id="b6" className="item b6" onClick={(event) => handleClicking(event, 5)}>{info[5].title}</button>
                <button type="button" id="b7" className="item b7" onClick={(event) => handleClicking(event, 6)}>{info[6].title}</button>
                <button type="button" id="b8" className="item b8" onClick={(event) => handleClicking(event, 7)}>{info[7].title}</button>
            </div>
            <div class="mp-table">
                <video id="mp-video" type='video/mp4' src={info[number].src} className="" autoPlay loop muted></video>
                <div class="container9">
                    <h1>دروس <span id="mp-title">{info[number].title}</span></h1>
                    <ul id="course-list">
                        <li id="1" type="none">{info[number].one}</li>
                        <li id="2" type="none">{info[number].two}</li>
                        <li id="3" type="none">{info[number].three}</li>
                        <li id="4" type="none">{info[number].four}</li>
                        <li id="5" type="none">{info[number].five}</li>
                        <li id="6" type="none">{info[number].six}</li>
                    </ul>
                </div>
            </div>
            </>
        )
    }

    return (
        <div className='main-page'>
            <Header></Header>
            <Intro></Intro>
            <Card></Card>
            <Section head='یادگیری موثر' p='زمان کمی در روز را صرف یاد گرفتن کنید 
اما هر روز یاد بگیرید. این شیوه صحیح 
یاد گرفتن است' pic={pic2} classn='intro'></Section>
            <Section head='برنامه ریزی' p='با برنامه ریزی خوب قطعا سرعت 
یادگیریتان چند برابر بیشتر میشود' pic={pic3} classn='intro index'></Section>
            <Section head='انگیزه' p='قطعا هر کسی برای رسیدت به هدف 
باید انگیزه ای داشته باشد که ما آن
را هم در نظر گرفته ایم' pic={pic4} classn='intro'></Section>
            <Table/>
            <Footer></Footer>
        </div>
    );
}

export default MainPage;
