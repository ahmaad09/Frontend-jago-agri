import { Fragment } from "react";

const Header = (props) => {
    const {children,} = props;
    return (
        <Fragment>
            <div className="flex justify-between items-center text-black pl-10 bg-white h-20 sticky top-0  z-20">
            <div className="flex items-center">
            <img src="/logo2.svg" alt="logo jagoagro" width={"60px"} />
            <p className="text-2xl font-bold ml-2 text-hijau">JagoAgri</p>
            </div>
            {children}
        </div>
        </Fragment>
        
    )
}

export default Header;
