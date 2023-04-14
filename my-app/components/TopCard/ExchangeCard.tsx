import React from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { RiExchangeLine } from "react-icons/ri";

const ExchangeCard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="uppercase font-bold tracking-widest text-secondary text-xl">
          Exchange
        </p>
        <RiExchangeLine size={30} />
      </div>
      <div className="flex items-center justify-between font-monoPT text-xl">
        <p>
          $<span className="text-2xl text-secondary">567</span>.000
        </p>
        <AiOutlineSwap size={30} className="text-special_green" />
        <p>
          <span className="text-2xl text-secondary">8799</span>.000 TRX
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <p className="font-monoPT">
            Min: <span className="text-special_green">$50</span>
          </p>
          <p className="font-monoPT">
            Max: <span className="text-special_green">$10,000</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCard;
