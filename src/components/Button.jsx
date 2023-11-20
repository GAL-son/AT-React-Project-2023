
const Button = (params) => {
    return(
        <button 
            type='button' 
            disabled={params.disabled}
            className={params.className}
            onClick={params.onClick}
        >
            {params.title}
        </button>
    )
}

export default Button;