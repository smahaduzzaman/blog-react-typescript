import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <h1 className="text-white text-2xl">React TypeScript Blog</h1>
        <p className="mt-3">by - s m ahaduzzaman</p>
      </div>
    </nav>
  );
};

export default Navbar;
