"use client";

import 'ag-grid-enterprise';
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { ColDef } from "ag-grid-community"; // Import the ColDef type
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { ModuleRegistry } from "@ag-grid-community/core";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ColumnsToolPanelModule,
  MenuModule,
  RowGroupingModule,
  FiltersToolPanelModule
]);
import { RbData, WrData } from "@/types/data"; // Import the data type
import { colDefsRb, colDefsWr } from "@/grid/colDefs";
import { getDataType } from "@/utils/getDataType";

import React from "react";

type ConfigType = {
  rowData: RbData[] | WrData[];
  columnDefs: ColDef[];
};

export default function Grid({ data }: { data: RbData[] | WrData[] }) {
  const getConfig = (data: RbData[] | WrData[]): ConfigType => {
    const dataType = getDataType(data);

    switch (dataType) {
      case "RbData":
        return { rowData: data, columnDefs: colDefsRb };
      case "WrData":
        return { rowData: data, columnDefs: colDefsWr };
      // Add more cases as needed
      default:
        throw new Error(`Unsupported data type: ${dataType}`);
    }
  };

  const config = getConfig(data);

  return (
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: 500 }} // the grid will fill the size of the parent container
    >
      <AgGridReact rowData={config.rowData} columnDefs={config.columnDefs} sideBar />
    </div>
  );
}
