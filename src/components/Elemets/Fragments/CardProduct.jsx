import Button from "../Button/Index";

const CardProduct = (props) => {
    const {children } = props;
    return (
        <div className="w-full max-w-60 rounded-md flex flex-col justify-between border-2">
            {children}
        </div>
    )
}

const Header = (props) => {
    const {image} = props;
    return (
            <img src={image}  className="rounded-tr-sm w-full object-cover" />
    );
}


const Body = (props) => {
    const {children,name} = props;
    return (
        <div className="mb-5 mx-5 h-full">
            <h5 className="font-semibold text-xl">{name}</h5>
            <p>
                {children}
            </p>
        </div>
    )
}

const Footer = (props) => {
    const {price} = props
    return (
        <div className="flex justify-between items-center mx-5 mb-5">
            <span className="font-semibold text-sm text-orange-500">
                {""}
                {price.toLocaleString("id-ID",{style: "currency",currency: "IDR"})}
                </span>
            <Button classname="bg-blue-500">Buy</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;