import { Link } from "react-router-dom";

const FromResetAcount = () => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center w-full mt-20">
            <div className="bg-white p-2 rounded-lg w-56 text-center">
                <Link to="/reset-email" className="text-black font-bold text-center">
                Reset Email
                </Link>
            </div>
            <div className="bg-white p-2 rounded-lg w-56 text-center">
                <Link to="/reset-password" className="text-black font-bold text-center">
                Reset Password
                </Link>
            </div>
        </div>
    )
}

export default FromResetAcount;