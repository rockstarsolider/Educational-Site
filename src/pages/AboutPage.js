import Header from '../component/Header';
import Footer from '../component/Footer';
import Image1 from '../style/image 1.png';
import Image2 from '../style/image 2.png';
import pro1 from '../style/Group 1.png';
import pro2 from '../style/Group 2.png';
import pro3 from '../style/Group 3.png';
import pro4 from '../style/Group 4.png';
import pro5 from '../style/Group 5.png';
import pro6 from '../style/Group 6.png';
import pro7 from '../style/Group 7.png';
import pro8 from '../style/Group 8.png';
import pro9 from '../style/Group 9.png';

function AboutPage() {
    const Intro = () => {
        return (
            <div className='intro b'>
                <img src={Image1} alt='intro' />
                <div>
                    <h1>درباره ما</h1>
                    <p>ماموریت Learn Plus الهام بخشیدن و توسعه افراد برای دستیابی به اهدافشان است - یک نفر، یک سوال و یک تعهد کوچک به یادگیری در یک زمان مشخص.
                        ما معلمان بزرگ را قادر می‌سازیم تا روح ریاضیات، علوم و مهندسی را از طریق تجربیات یادگیری تعاملی و کوچک روشن کنند. دوره های ما قوانینی را که جهان ما را شکل می دهند بررسی می کند و ریاضیات و علوم را از چیزی که باید از آن ترسید به یک تجربه لذت بخش از اکتشاف هدایت شده ارتقاء دهد.</p>
                </div>
            </div>
        );
    };

    const OurTeam = () => {
        return (
            <div className='OurTeam b'>
                <h1>تیم ما</h1>
                <div className='TeamCards'>
                    <div className='TeamCard'>
                        <img src={pro4} alt='profile' />
                        <h2>دانیال برزگر</h2>
                        <h3>از اعضای گروه فرانت</h3>
                    </div>
                    <div className='TeamCard'>
                        <img src={pro3} alt='profile' />
                        <h2>علیرضا عادلی</h2>
                        <h3>از اعضای گروه فرانت</h3>
                    </div>
                    <div className='TeamCard'>
                        <img src={pro2} alt='profile' />
                        <h2>علی اسماعیل زاده</h2>
                        <h3>سرپرست تیم</h3>

                    </div>
                    <div className='TeamCard'>
                        <img src={pro1} alt='profile' />
                        <h2>فرهاد رضاقلی</h2>
                        <h3>سرپرست تیم</h3>
                    </div>
                </div>
                <div className='TeamCards'>
                    <div className='TeamCard'>
                        <img src={pro8} alt='profile' />
                        <h2>پارسا فرجامی</h2>
                        <h3>از اعضای گروه بک اند</h3>
                    </div>
                    <div className='TeamCard'>
                        <img src={pro7} alt='profile' />
                        <h2>محمدصدرا کاظمی</h2>
                        <h3>از اعضای گروه بک اند</h3>
                    </div>
                    <div className='TeamCard'>
                        <img src={pro6} alt='profile' />
                        <h2>پوریا غیاثی</h2>
                        <h3>از اعضای گروه فرانت</h3>
                    </div>
                    <div className='TeamCard'>
                        <img src={pro5} alt='profile' />
                        <h2>مبین حسینی</h2>
                        <h3>از اعضای گروه فرانت</h3>
                    </div>
                </div>
                <div className='TeamCards'>
                    <div className='TeamCard'>
                        <img src={pro9} alt='profile' />
                        <h2>عرفان خواجه زاده</h2>
                        <h3>از اعضای گروه بک اند</h3>
                    </div>
                </div>
            </div>
        );
    };

    const Jobs = () => {
        return (
            <div className='intro b'>
                <img src={Image2} alt='intro' />
                <div>
                    <h1>مشاغل</h1>
                    <p>ما به ماموریت خود و کسب و کاری که حول آن ساخته ایم افتخار می کنیم. ما واقعاً سخت کار می کنیم و بیشتر روزها عاشق کارمان هستیم. در مورد کار در Learn Plus و افتتاحیه های فعلی ما بیاموزید.</p>
                </div>
            </div>
        );
    };

    const Press = () => {
        return (
            <div className='press'>
                <div>
                    <h1>مطبوعات</h1>
                    <p>برای سوالات مطبوعاتی، به <span> Example.org</span> بزنید.</p>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Header />
            <Intro />
            <OurTeam />
            <Jobs />
            <Press />
            <Footer />
        </div>
    );
}

export default AboutPage;