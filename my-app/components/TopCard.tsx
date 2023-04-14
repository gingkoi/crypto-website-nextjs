import React from "react";
import Card from "./Card";
import ExchangeCard from "./TopCard/ExchangeCard";

const TopCard = () => {
  return (
    <div className="text-white grid md:grid-cols-6 lg:grid-cols-7 gap-5">
      <div className="grid lg:col-span-2 md:col-span-3">
        <Card>
          <ExchangeCard />
        </Card>
      </div>
      <div className="grid lg:col-span-3 md:col-span-3">
        <Card>Hello</Card>
      </div>
      <div className="grid lg:col-span-2 md:col-span-6">
        <Card>Hello</Card>
      </div>
    </div>
  );
};

export default TopCard;
