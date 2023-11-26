import "./PrinciplesPage.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../style/HTML.css";
import "./PrinciplesPage.css";

function PrinciplesPage() {
    const Blackbox = () => {
        return (
            <div className='principles'>
            <div className="black-box">
                <h2>ما عاشق یادگیری هستیم</h2>
                <p>ما اینجا هستیم تا کنجکاوی شما را تحریک کنیم و به شما الهام بخشیم با زیبایی ریاضیات، علوم و علوم کامپیوتر.</p>
            </div>
            <div className="our-pri">
                <h2>اصول ما</h2>
                <p> فرهنگ یادگیری را پیرامون پرس و جو، کنجکاوی و گشودگی به شکست ایجاد می کند. همه دوره های ما با در نظر گرفتن این اصول یادگیری نوشته شده اند.</p>
                <h2>یادگیری موثر ریاضی و علوم</h2>
                <div className="flex">
                    <div>
                        <h2>هیجان زده می کند</h2>
                        <p>بزرگترین چالش برای اموزش</p>
                    </div>
                    <h1> 1 </h1>
                </div>
            </div>
            </div>
        );
    }

    return (
        <div>
        <Header />
        <Blackbox/>
        <Footer />
        </div>
    );
}

export default PrinciplesPage;
