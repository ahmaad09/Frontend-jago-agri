import React from 'react';

const InputForm = ({ type, name, placeholder, htmlFor, id, value, onChange, required }) => {
    return (
        <div className="mb-4 ">
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="shadow mt-2 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};

export default InputForm;
