import Image2 from "../style/image 11 (2).png";
import './LearningRoad.css';
import Header2 from '../component/Header2'
import platform from '../style/platform.png'
import platform2 from '../style/platform2.png'
import {Link} from 'react-router-dom'

function LearningRoadPage(){
    const data = [
        {
            name: 'منطق استراتژی نوبتی',
            state: 'active',
            key: 1
        },
        {
            name: 'یادگیری منطق استراتژی نوبتی',
            state: 'active',
            key: 2
        },
        {
            name: 'حقیقت جویی',
            state: 'deactive',
            key: 3
        },
        {
            name: 'یادگیری حقیقت جویی',
            state: 'deactive',
            key: 4
        },
        {
            name: 'ازمون حقیقت جویی',
            state: 'deactive',
            key: 5

        },
        {
            name: 'بدترین حالت ها',
            state: 'deactive',
            key: 6
        },
        {
            name: 'اطلاعات غلط',
            state: 'deactive',
            key: 7
        },
    ]

    const Title = () => {
        return (
            <div className="border-area">
                <img src={Image2}></img>
                <h3>منطق ترتیبی</h3>
                <p>28 درس</p>
            </div>
        )
    }

    const Road = () => {
        return(
            data.map(function (item, index){
                if (item.state === 'deactive'){
                    return <div key={index} className='box-item'>
                        <Link to='/Educational-Site/coursepage'><img src={platform}/></Link>
                        <p>{item.name}</p>
                    </div>
                } else {
                    return <div key={index} className='box-item'>
                        <Link to='/Educational-Site/coursepage'><img src={platform2}/></Link>
                        <p>{item.name}</p>
                    </div>
                }
            })
        )
    }

    return(
        <div>
            <Header2/>
            <div className="lerning-road">
                <div className="title"><Title/></div>
                <div className="all-boxes"><Road/></div>
            </div>
        </div>
    )
}

export default LearningRoadPage