import React, { useState } from "react";

const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  error = "",
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mb-4 relative">
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <input
        type={showPassword ? "text" : "password"}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 pr-10 rounded-md border ${
          error ? "border-red-400" : "border-gray-300"
        } text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />

      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600 focus:outline-none"
      >
        {showPassword ? "Hide" : "Show"}
      </button>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default PasswordInput;
