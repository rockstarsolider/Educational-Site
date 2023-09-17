import Button from "./Button";

function Header(){
    return(
        <div className="header">
            <h2>LearnPlus</h2>
            <div className="button-container">
                <Button secondary>ورود</Button>
                <Button primary>ثبت نام</Button>
            </div>
        </div>
    )    
}

export default Header