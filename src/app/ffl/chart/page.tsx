import React from "react";
import Chart from "@/chart/Chart";
import { getRbData, getWrData } from "@/data/repository";
import { RbData, WrData } from "@/types/data";

export default async function page() {
  const createSeriesData = (data: RbData[] | WrData[]) => {
    const sortedData = [...data].sort((a, b) => b.touchdowns - a.touchdowns);
    return sortedData.slice(0, 60).map((data, index) => ({
        rank: index + 1,
        player: data.player,
        points: data.touchdowns,
    }));
    }
  const rbData = await getRbData(2023);
  const wrData = await getWrData(2023);

  return (
    <div>
      <Chart
        positionDataSeries={[
          { data: createSeriesData(rbData), position: "rb" },
          { data: createSeriesData(wrData), position: "wr" },
        ]}
      />
    </div>
  );
}
