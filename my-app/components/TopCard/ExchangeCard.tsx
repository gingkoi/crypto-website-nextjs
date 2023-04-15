import React from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { RiExchangeLine } from "react-icons/ri";

const ExchangeCard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="uppercase font-bold tracking-widest text-secondary lg:text-xl">
          Exchange
        </p>
        <RiExchangeLine size={30} />
      </div>
      <div className="flex lg:flex-row flex-col space-y-3 lg:space-y-0 items-center justify-between font-monoPT lg:text-xl text-sm">
        <p>
          $
          <span className="lg:text-2xl text-lg text-secondary font-bold">
            567
          </span>
          .000
        </p>
        <AiOutlineSwap size={30} className="text-special_green" />
        <p>
          <span className="lg:text-2xl text-lg text-secondary font-bold">
            8799
          </span>
          .000 TRX
        </p>
      </div>
      <div>
        <div className="flex lg:flex-row flex-col justify-between items-center">
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
