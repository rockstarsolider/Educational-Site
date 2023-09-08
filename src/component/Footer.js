import '../style/component.css'
import {TbBrandTelegram, TbBrandInstagram, TbBrandTwitter} from 'react-icons/tb'

function Footer(){
    return(
        <div className="footer">
            <div className='row1'>
                <h2>LearnPlus</h2>
                <p>ما به شما کمک میکنیم تا هرچیزی را یاد بگیرید</p>
            </div>
            <div className='row2'>
                <div className='column1'>
                    <TbBrandTelegram/>
                    <TbBrandInstagram/>
                    <TbBrandTwitter/>
                </div>
                <div className='column2'>
                    <p>درباره ما</p>
                    <p>قیمت گذاری</p>
                    <p>دوره ها</p>
                </div>
            </div>
        </div>
    )
}

export default Footer