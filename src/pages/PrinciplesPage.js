import "./PrinciplesPage.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../style/HTML.css";
import "./PrinciplesPage.css";

function PrinciplesPage() {
    const Blackbox = () => {
      return (
        <div>
          <div className="black-box">
            <div className="black-rectangle" />
            <div>
              <h2 className="h2-tit">hi</h2>
            </div>
          </div>
          <div className="black-box-2">
            <div className="black-rectangle-2" />
            <div>
              <h2 className="h3-tit">ما عاشق❤ یادگیری هستیم</h2>
              <p className="h4-tit">
                ما اینجا هستیم تا کنجکاوی شما را تحریک کنیم و به شما الهام بخشیم
                با زیبایی ریاضیات، علوم و علوم کامپیوتر.
              </p>
            </div>
          </div>
        </div>
      );
    }
  
    const Titleosol = () => {
      return (
        <div className="white-box">
          <p className="p-osol">اصول ما</p>
        </div>
      )
  }
    

  return (
    <div>
      <Header />
      <Blackbox />
      <Titleosol />
      <Footer />
    </div>
  );
}

export default PrinciplesPage;
