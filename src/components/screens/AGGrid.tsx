import {
  AgGridReact,
  AgGridColumn,
  ChangeDetectionStrategyType
} from "ag-grid-react";
import { Button, Rate } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { Container } from "../../elements/Container";
import { GridApi, ICellRendererParams, RowNode } from "ag-grid-community";
import {ManOutlined, WomanOutlined} from '@ant-design/icons';
import MOCK_DATA from "./../../MOCK_DATA.json";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import styled from "styled-components";

const GridContainer = styled.div`
  background: red;
  & .ag-center-cols-container {
    // width: 100% !important;
  }
`;

const RatingWrapper = React.memo(
  (props: { value: number; handleUpdate: (n: number) => void }) => {
    return (
      <Rate
        // disabled
        defaultValue={props.value}
        onChange={v => props.handleUpdate(v)}
      />
    );
  }
);
interface IMockData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  rating: number;
  [key: string]: any;
}
const AGGrid = () => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [data, setData] = useState(MOCK_DATA);
  const getSelectedRows = () => {
    if (gridApi) {
      const selectedNodes = gridApi.getSelectedNodes();
      const selectedData = selectedNodes.map(node => node.data);
      console.log(selectedData);
    }
  };

  useEffect(() => {
    console.log("State:data updated");
  }, [data]);
  const updateCellValue = useCallback(
    (params: {
      data: { id: number };
      newValue: string;
      column: { colId: keyof IMockData };
      node: RowNode;
    }) => {
      const _data = data.map((row: IMockData) => {
        if (row.id === params.data.id) {
          row[params.column.colId] = params.newValue;
        }
        return row;
      });
      setData(_data);
    },
    [data, gridApi]
  );

  useEffect(() => {
    setTimeout(() => {
      console.log("editing done");
      const _data = [...data];
      // _data[3] = {..._data[3]}
      _data[3].rating = 0;
      _data[3].first_name = "QOIWDOQINDWOQIWND";
      setData(_data);

      if (gridApi) {
        console.log(gridApi.getRenderedNodes()[3]);
        gridApi.refreshCells({
          rowNodes: [gridApi.getRenderedNodes()[3]]
        });
      }
    }, 5000);
  }, [gridApi]);

  return (
    <Container>
      <Button type="primary" onClick={getSelectedRows}>
        Get Selected Rows
      </Button>
      <br />
      <br />
      <GridContainer className="ag-theme-balham" style={{ height: 400 }}>
        <AgGridReact
          animateRows
          disableStaticMarkup
          pagination
          paginationAutoPageSize
          rowDataChangeDetectionStrategy={
            ChangeDetectionStrategyType.DeepValueCheck
          }
          // columnDefsChangeDetectionStrategy={}
          rowData={data}
          rowSelection="multiple"
          onGridReady={params => {
            console.log(params.api);
            setGridApi(params.api);
          }}
        >
          <AgGridColumn
            checkboxSelection
            sortable
            filter
            field="id"
            width={100}
          ></AgGridColumn>
          <AgGridColumn
            sortable
            filter
            field="first_name"
            onCellValueChanged={updateCellValue}
            editable
            headerName="First Name"
            width={120}
          ></AgGridColumn>
          <AgGridColumn
            sortable
            filter
            field="last_name"
            onCellValueChanged={updateCellValue}
            editable
            headerName="Last Name"
            width={120}
          ></AgGridColumn>
          <AgGridColumn
            sortable
            filter
            field="email"
            onCellValueChanged={updateCellValue}
            editable
          ></AgGridColumn>
          <AgGridColumn
            sortable
            filter
            field="gender"
            onCellValueChanged={updateCellValue}
            cellRendererFramework={(params: ICellRendererParams) => (
              params.value == "Male" ? <ManOutlined /> : <WomanOutlined />
            )}
            editable
            width={100}
          ></AgGridColumn>
          <AgGridColumn
            sortable
            filter
            field="rating"
            headerName="Rating"
            cellRendererFramework={(params: ICellRendererParams) => {
              return (
                <RatingWrapper
                  value={params.value}
                  handleUpdate={v =>
                    setData(
                      data.map((row: IMockData) => {
                        if (row.id === params.data.id) {
                          row.rating = v;
                        }
                        return row;
                      })
                    )
                  }
                />
              );
            }}
            // onCellValueChanged={updateCellValue}
            // editable
          ></AgGridColumn>
        </AgGridReact>
      </GridContainer>
    </Container>
  );
};

export default AGGrid;
