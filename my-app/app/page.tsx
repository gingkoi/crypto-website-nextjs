"use client";
import BottomCard from "@/components/BottomCard/BottomCard";
import TopCard from "@/components/TopCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [coin, setCoin] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="bg-primary w-screen static">
      <div className="lg:m-10 m-5 space-y-5">
        <TopCard />
        <BottomCard coin={coin} />
      </div>
    </main>
  );
}
