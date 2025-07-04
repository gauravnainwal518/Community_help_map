import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  //base button classes
  const baseClasses =
    "px-10 py-5 rounded-full font-medium transition duration-200";

  //variant specific button classes
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-green-600 text-white hover:bg-green-700",
  };

  // Combine base + variant + optional extra class-> this will uses for reusability , clean styaling
  const finalClasses = `${baseClasses} ${
    variants[variant] || variants.primary
  } ${className}`;

  return (
    <button type={type} onClick={onClick} className={finalClasses}></button>
  );
};

export default Button;
