import React from "react";

const Card = ({ children }: { children: any }) => {
  return (
    <div className="w-full bg-black rounded-2xl p-8 font-raleway">
      {children}
    </div>
  );
};

export default Card;
