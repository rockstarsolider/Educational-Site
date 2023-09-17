<<<<<<< HEAD
function Button({primary, secondary, children}){
    if (primary){
        return <button className='primary'>{children}</button>
    } else if (secondary){
        return <button className="secondary">{children}</button>
    }
}

=======
function Button({primary, secondary, children}){
    if (primary){
        return <button className='primary'>{children}</button>
    } else if (secondary){
        return <button className="secondary">{children}</button>
    }
}

>>>>>>> 81d5c73d557b764d64a44c10ff941960be377b9d
export default Button