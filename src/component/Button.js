<<<<<<< HEAD
=======

>>>>>>> e41fe98e67b648155c99f32aedf025e21cebef35
function Button({primary, secondary, children}){
    if (primary){
        return <button className='primary'>{children}</button>
    } else if (secondary){
        return <button className="secondary">{children}</button>
    }
}

export default Button