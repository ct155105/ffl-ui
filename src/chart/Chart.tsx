"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface DataPoint {
  player: string;
  rank: number;
  touchdowns: number;
}

interface PositionDataSeries {
  data: DataPoint[];
  position: "rb" | "wr";
}

const Chart = ({
  positionDataSeries,
}: {
  positionDataSeries: PositionDataSeries[];
}) => {
  const chartRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      myChart.setOption({
        title: {
          text: "ECharts Getting Started Example",
        },
        legend: {
            orient: 'vertical',
            right: 10,
            top: 'center'
        },
        // tooltip: {},
        xAxis: {
        },
        yAxis: {},
        series: positionDataSeries.map((positionData, index) => {
            return {
              type: "scatter",
              datasetIndex: index,
              name: positionData.position,
              emphasis: {
                focus: 'series',
                label: {
                  show: true,
                  formatter: function(param) {
                    return param.data[2];
                  },
                  position: 'top'
                }
              },
            };
          }),
        dataset: positionDataSeries.map((positionData) => {
          return {
            source: positionData.data.map((data) => [
              data.rank,
              data.touchdowns,
              data.player,
            ]),
          };
        }),
      });
      myChart.on("click", function (params) {
        console.log(params);
      });
    }
  }, []);

  return (
    <div id="main" ref={chartRef} style={{ width: "100%", height: "400px" }} />
  );
};

export default Chart;
