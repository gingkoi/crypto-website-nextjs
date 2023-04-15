import React from "react";

const CoinItem = ({ coins }: { coins: any }) => {
  return (
    <div className="flex items-center justify-between py-5 my-1 text-white border-b border-b-white/10">
      <div className="flex items-center">
        <img src={coins.image} alt="/" className="w-[30px] lg:w-[40px] mr-2" />
        <p className="font-bold text-sm lg:text-base">
          {coins.symbol.toUpperCase()}
        </p>
      </div>
      <p className="font-monoPT text-sm lg:text-base">
        ${coins.current_price.toLocaleString()}
      </p>
      <p
        className={
          coins.price_change_percentage_24h > 0
            ? "text-green-500 font-bold font-monoPT text-sm lg:text-base"
            : "text-red-600 font-bold font-monoPT text-sm lg:text-base"
        }
      >
        {coins.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p className="hide-mobile font-monoPT">
        ${coins.total_volume.toLocaleString()}
      </p>
      <p className="hide-mobile font-monoPT">
        ${coins.market_cap.toLocaleString()}
      </p>
    </div>
  );
};

export default CoinItem;
