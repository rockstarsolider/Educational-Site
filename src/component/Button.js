import "./Button.css";
import { gsap } from "gsap";
const { useEffect, useState } = 'React';

function Button({ primary, secondary, solid, children, ...rest }) {

    const onEnter = ({ currentTarget }) => {gsap.to(currentTarget, { backgroundColor: '#3a45a1', scale: 1.05 });};
    const onLeave = ({ currentTarget }) => {gsap.to(currentTarget, { backgroundColor: "#3646D3", scale: 1 });};
    
    const onEnter2 = ({ currentTarget}) => {gsap.to(currentTarget, { backgroundColor: '#474747', scale: 1.05 });};
    const onLeave2 = ({ currentTarget }) => {gsap.to(currentTarget, { backgroundColor: "#222020", scale: 1 });};

    if (primary) {
        return <button {...rest} className='primary' onMouseEnter={onEnter} onMouseLeave={onLeave}>{children}</button>;
    } else if (secondary) {
        return <button {...rest} className="secondary" onMouseEnter={onEnter2} onMouseLeave={onLeave2}>{children}</button>;
    } else if (solid) {
        return <button {...rest} className="solid">{children}</button>;
    }
}

export default Button;