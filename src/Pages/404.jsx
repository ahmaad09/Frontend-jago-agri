import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError
    return(
        <div className="flex justify-center items-center flex-col h-screen">
            <img src="/icons/404.svg" width={"400px"} alt="" />
            <h2 className="text-slate-600 text-2xl">Maaf halaman tidak di temukan, silahkan kembali</h2>
            <p>{error.statusText || error.message}</p>
        </div>
    ) 
}
export default ErrorPage