import Header from '../component/Header'
import Footer from '../component/Footer'
import pic1 from '../style/971 1.png'
import pic2 from '../style/learning-education-word-letters 1.png'
import pic3 from '../style/pic5.png'
import pic4 from '../style/the-reward-4k-9x 2.png'
import Button from '../component/Button'
import { TbCalculator, TbSchool, TbEngine, TbBrandGit, TbDatabase} from 'react-icons/tb';

function MainPage(){
    const Intro = () => {
        return (
            <div className='intro'>
                <img src={pic1}/>
                <div>
                    <h2>بهترین روش یادگیری کدنویسی، 
خلاقیت و تعامل کاملا رایگان</h2>
                    <p>چگونه یک کدنویس حرفه ای شویم؟</p>
                    <p>چگونه خلاقیت خود را افزایش دهیم؟</p>
                    <p>چگونه تعامل با دیگران را یاد بگیریم؟</p>
                    <br/>
                    <Button primary>ثبت نام</Button>
                </div>
            </div>
        )
    }

    const Section = ({head, p, pic, classn}) => {
        return (
            <div className={classn}>
                <img src={pic}/>
                <div className='width'>
                    <h2>{head}</h2>
                    <br/>
                    <p>{p}</p>
                </div>
            </div>
        )
    }

    const Card = ()=>{
        return(
            <div className='cards'>
                <div className='card'>
                    <TbCalculator className='icon'/>
                    <p>ریاضی</p>
                </div>
                <div className='card'>
                    <TbSchool className='icon'/>
                    <p>علوم</p>
                </div>
                <div className='card'>
                    <TbEngine className='icon'/>
                    <p>مهندسی</p>
                </div>
                <div className='card'>
                    <TbBrandGit className='icon'/>
                    <p>برنامه نویسی</p>
                </div>
                <div className='card'>
                    <TbDatabase className='icon'/>
                    <p>علوم داده</p>
                </div>
            </div>
        )
    }

    return(
        <div>
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
            <Footer></Footer>
        </div>
    )
}

export default MainPage