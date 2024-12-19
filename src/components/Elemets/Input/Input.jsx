const Input = ({ type, placeholder, name,id,classname="bg-blue" }) => {
    return (
      <input
        maxLength={30}
        name={name}
        type={type}
        className={`text-sm border placeholder:italic rounded-full border-black  w-full placeholder:text-slate-500 py-3 px-3 text-slate-700 focus:outline-none italic ${classname}`}
        placeholder={placeholder}
        id={id}
      />
    );
  };
  
  export default Input;
  