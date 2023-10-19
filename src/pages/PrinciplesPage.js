import "./PrinciplesPage.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../style/HTML.css";
import "./PrinciplesPage.css";

function PrinciplesPage() {
    const Blackbox = () => {
        return (
          <div className="black-box">
                <div className="black-rectangle" />
                <div>
                    <h2>hi</h2>
                </div>
          </div>
        );
    }

  return (
    <div>
          <Header />
          <Blackbox />
      <Footer />
    </div>
  );
}

export default PrinciplesPage;
