import React from "react";
import Chart from "@/chart/Chart";
import { getPlayerProjections } from "@/data/repository";
import { PlayerProjection } from "@/types/data";

export default async function page() {
  const createSeriesData = (
    data: PlayerProjection[],
    position: "rb" | "wr" | "qb" | "te"
  ) => {
    const filteredData = data
      .filter((player) => player.position === position)
      .map((player) => ({
        rank: player.fantasyPointsRank,
        player: player.playerName,
        points: player.fantasyPoints,
      }));
    const sortedData = [...filteredData].sort((a, b) => b.points - a.points);
    const slice = position === "qb" || position === "te" ? 30 : 60;
    return sortedData.slice(0, slice);
  };
  const playerProjections = await getPlayerProjections(2024);

  return (
    <div>
      <Chart
        positionDataSeries={[
          { data: createSeriesData(playerProjections, "rb"), position: "rb" },
          { data: createSeriesData(playerProjections, "wr"), position: "wr" },
          { data: createSeriesData(playerProjections, "qb"), position: "qb" },
          { data: createSeriesData(playerProjections, "te"), position: "te" },
        ]}
      />
    </div>
  );
}
