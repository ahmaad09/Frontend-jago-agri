const Button = (props) => {
    const { children, classname = 'bg-kuning',onClick = ()=>{},type="button" } = props;
    return (
        <button
            type={type}
            onClick={onClick}
            className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
        >
            {children}
        </button>
    );
};

export default Button;