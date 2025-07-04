import React from "react";

const Textarea = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  error = "",
  className = "",
  rows = 4,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <textarea
        name={name}
        id={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 rounded-md border ${
          error ? "border-red-400" : "border-gray-300"
        } text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Textarea;
