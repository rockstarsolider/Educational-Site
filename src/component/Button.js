
function Button({primary, secondary, children}){
    if (primary){
        return <button className='primary'>{children}</button>
    } else if (secondary){
        return <button className="secondary">{children}</button>
    }
}

export default Button