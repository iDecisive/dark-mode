import React from "react";
import Chart from "./Chart";

const SingleChart = ({coinSelect}) => {

    return (
        <div className="charts">
    
            <div className="chart__container" key={coinSelect.name}>
              <h2 className="coin__title">{coinSelect.name}</h2>
              <h4 className="coin__symbol">{coinSelect.symbol}</h4>
              <div className="coin__logo">
                <img src={coinSelect.image} height="40" alt={coinSelect.name} />
              </div>
              <Chart sparklineData={coinSelect.sparkline_in_7d.price} />
            </div>
          )}
        </div>
      );
    };

export default SingleChart;
