import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-transparent text-white font-semibold py-2 px-4 ml-5 border border-white rounded hover:bg-white hover:text-gray-800"
    >
      {children}
    </button>
  );
};

export default Button;

{
  /* <a
            href={`/posts/${post.id}`}
            className="rounded-full bg-gray-600 text-white px-5 py-2 mt-20 hover:bg-gray-800 text-white decoration-0"
          >
            Learn More
          </a> */
}
