import "./Question1.css";
import { Link } from "react-router-dom";


function Question1() {
  return (
    <div className="All-box-Question">
      <h1 className="P-1-Q">کدام شما را بهتر توصیف میکند</h1>
      <div className="Box-1-q">
        <p className="p1">
          دانش آموز<span className="gray-p-1">یا به زودی ثبت نام می شود</span>
        </p>
      </div>
      <div className="Box-1-q">
        <p className="p1">
          حرفه ای <span className="gray-p-2">دنبال حرفه</span>
        </p>
      </div>
      <div className="Box-1-q">
        <p className="p1">
          والدین <span className="gray-p-2">یک کودک در سن مدرسه</span>
        </p>
      </div>
      <Link to="/Educational-Site/Question2">
        <button className="Button-Q">ادامه</button>
      </Link>
    </div>
  );
}
export default Question1;
