import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="row1">
        <p className="logo">MindDev</p>
        <p className="footer-txt">
          ما به شما کمک میکنیم تا هرچیزی را یاد بگیرید
        </p>
      </div>
      <div className="row2">
        <div className="column1">
          <Link
            to="/Educational-Site/comments"
            className="footer-link"
          >
            نظرات
          </Link>
          <Link to="/Educational-Site/Principles" className="footer-link">
            اصول
          </Link>
        </div>
        <div className="column2">
          <Link to="/Educational-Site/about" className="footer-link">
            درباره ما
          </Link>
          <Link to="/Educational-Site/pricing" className="footer-link">
            قیمت گذاری
          </Link>
          <Link
            to="/Educational-Site/courses-page"
            className="footer-link"
          >
            دوره ها
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
