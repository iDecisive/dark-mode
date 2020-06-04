import React, { useState, useEffect } from "react"; 
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import SingleChart from "./components/singleChart"

import "./styles.scss";

const App = () => {

  //State

  const [coinData, setCoinData] = useState([]);

  let [coinSelect, setCoinSelect] = useState({

    name: '',
    symbol: '',
    sparkline_in_7d: {

      price: [100,200]

    }

  });

  //Functions

  let selectChanged = event => {

    coinData.forEach(item => {

      if (item.symbol === event.target.value) {

        setCoinSelect(item);

      }

    });

  }

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
      )
      .then(res => {setCoinData(res.data); console.log(res.data)})
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <select onChange={selectChanged}>

        <option value='btc'>BTC</option>
        <option value='eth'>ETH</option>
        <option value='usdt'>USDT</option>
        <option value='xrp'>XRP</option>

      </select>

      <SingleChart coinSelect={coinSelect}/>
      {/* <Charts coinData={coinData} /> */}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
