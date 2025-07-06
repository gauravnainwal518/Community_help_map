import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  // Base button classes
  const baseClasses =
    "px-10 py-5 rounded-full font-medium transition duration-200";

  // Variant-specific button classes
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-green-600 text-white hover:bg-green-700",
  };

  // Final combined classes
  const finalClasses = `${baseClasses} ${
    variants[variant] || variants.primary
  } ${className}`;

  return (
    <button type={type} onClick={onClick} className={finalClasses}>
      {children}
    </button>
  );
};

export default Button;
