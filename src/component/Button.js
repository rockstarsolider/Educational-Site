import "./Button.css";

function Button({ primary, secondary, solid, children, ...rest }) {
    if (primary) {
        return <button {...rest} className='primary'>{children}</button>;
    } else if (secondary) {
        return <button {...rest} className="secondary">{children}</button>;
    } else if (solid) {
        return <button {...rest} className="solid">{children}</button>;
    }
}

export default Button;