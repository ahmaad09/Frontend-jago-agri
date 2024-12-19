import { Link } from "react-router-dom"

const Forgot = (props) => {
    const {children} = props
    return(
        <div className="flex my-4 justify-end text-white relative bottom-2">
            <p className="mr-2 text-sm">
            <Link to="/resetAcount">{children}</Link>
            </p>
        </div>
    )
}

export default Forgot