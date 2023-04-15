import React from "react";
import Card from "../Card";
import { BsCaretDownFill } from "react-icons/bs";
import CoinItem from "./CoinItem";

const BottomCard = ({ coin }: { coin: any }) => {
  const topName = ["Name", "Price", "24H%", "Market Cap", "Volume (24h)"];
  return (
    <div>
      <Card>
        <div className="flex items-center justify-between text-white">
          <p className="">Coins</p>
          <p>Prices</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Total Marketcap</p>
        </div>
        {coin.map((coins: any) => {
          return <CoinItem coins={coins} key={coins.id} />;
        })}
      </Card>
    </div>
  );
};

export default BottomCard;
