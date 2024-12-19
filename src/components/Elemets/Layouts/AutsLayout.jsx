import { Link } from "react-router-dom";
const AutsLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center h-screen relative w-full bg-slate-100 gap-10">
      <div className="bg-[url('./logo.svg')]  w-80 h-80 max-w-xs bg-cover bg-center rounded-md"></div>
      <div className="max-w-md w-[400px] bg-hijau px-10 py-10 rounded-2xl" >
        <h1 className="text-white font-bold text-3xl text-center mb-10">{title}</h1>
        {children}
        <Navigation type={type} />
      </div>
    </div >
  )
}
const Navigation = ({ type }) => {
  if (type === 'login') {
    return (
      <p className="text-sm text-center my-3 text-white">
        Don't have an acount {" "}
        <Link to="/register" className="text-white font-bold">
          <em>Sign Up</em>
        </Link></p>
    )
  }
  else if (type === 'resetacount') {
    return (
      <p className="text-sm text-center my-3 text-white font-semibold mt-32">Stay calm and don’t panic</p>
    )
  }
  else if (type === 'resetusername') {
    return (
      <p className="text-sm text-center my-3 text-white font-semibold mt-3 mb-10">Username has been reset? {"  "}
        <Link to="/login" className="text-white font-bold">
          <em>Sign In</em>
        </Link></p>
    )
  }
  else if (type === 'resetpassword') {
    return (
      <p className="text-sm text-center my-3 text-white font-semibold mt-3 mb-10">Password has been reset? {"  "}
        <Link to="/login" className="text-white font-bold">
          <em>Sign In</em>
        </Link></p>
    )
  } 
  else {
    return (
      <p className="text-sm text-center my-3 text-white">
        Already have an acount? {" "}
        <Link to="/login" className="text-white font-bold">
          <em>Sign In</em>
        </Link></p>
    )
  }
 
}

export default AutsLayouts;   