import Header from '../components/Header';
import Footer from '../components/Footer';
import pic1 from '../style/971 1.png';
import pic2 from '../style/imagenum1.png';
import pic3 from '../style/learn-at-your-level 1 (1).png';
import pic4 from '../style/../style/stay-motivated 1.png';

function CourseIntro() {
    const Course = () => {
        var link = document.location.href.split('/');
        link = link[link.length - 1];
        if (link === 'math') { return 'ریاضی'; } else
            if (link === 'science') { return 'علوم'; } else
                if (link === 'engineering') { return 'مهندسی'; } else
                    if (link === 'programming') { return 'برنامه نویسی'; } else
                        if (link === 'datascience') { return 'علوم داده'; }
    };

    const Section = ({ head, p, pic, classn }) => {
        const Title = () => {
            if (classn.includes('first-intro')) {
                return <h2>{head}<Course /></h2>;
            } else {
                return <h2>{head}</h2>;
            }
        };
        return (
            <div className={classn}>
                <img src={pic} alt='pic' />
                <div className='width'>
                    <Title />
                    <br />
                    <p>{p}</p>
                </div>
            </div>
        );
    };
    return (
        <>
            <Header />
            <Section head='بهترین روش یادگیری ' p='حل مسله فعال به صورت پیشرفته را در این دوره بیاموزید' pic={pic1} classn='intro first-intro' />
            <Section head='یادگیری موثر' p='زمان کمی در روز را صرف یاد گرفتن کنید اما هر روز یاد بگیرید. این شیوه صحیح یاد گرفتن است' pic={pic2} classn='intro' />
            <Section head='برنامه ریزی' p='با برنامه ریزی خوب قطعا سرعت یادگیریتان چند برابر بشتر میشود' pic={pic3} classn='intro index' />
            <Section head='انگیزه' p='قطعا هر کسی برای رسیدت به هدف باید انگیزه ای داشته باشد که ما آنرا هم در نظر گرفته ایم' pic={pic4} classn='intro' />
            <Footer />
        </>
    );
}

export default CourseIntro;