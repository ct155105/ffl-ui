'use client'

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { ColDef } from "ag-grid-community"; // Import the ColDef type
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { RbData } from "@/types/data"; // Import the data type

import React, { useState } from "react";

export default function Grid({ data }: { data: RbData[]} ) {

const [colDefs, setColDefs] = useState<ColDef<RbData>[]>([
    { field: "player" },
    { field: "player_id" },
    { field: "position" },
    { field: "team_name" },
    { field: "player_game_count" },
    { field: "attempts" },
    { field: "avoided_tackles" },
    { field: "breakaway_attempts" },
]); 

  return (
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: 500 }} // the grid will fill the size of the parent container
    >
      <AgGridReact rowData={data} columnDefs={colDefs} />
    </div>
  );
}
