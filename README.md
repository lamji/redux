# Web Admin Table List MApp

Web Admin Table List Mini-app.

[![repository](https://img.shields.io/badge/repo-gitlab-orange)](http://serino-gitlab.serino.com/Dev/mini-app/mini-app-web/tree/serino-mapp-admin-table-list)

## Mini App

- Admin Table List - [![status](https://img.shields.io/badge/DONE-green)](#)

## Changelogs

```sh
- v2.0.9 - Adjust package.json script
- v2.0.8 - Adjust key of each filter in filter list
- v2.0.7 - Added dataIn props to modify string on Search bar and to autoClose options on More Action
- v2.0.6 - Added controlled data to support the data persist outside of MApp
- v2.0.5 - Added Label and Icons in filterProps, actionProps, and redirectionProps
- v2.0.4 - Reverted into v1.0.13
- v2.0.0 - v2.0.3 - Don't use these versions
- v1.0.13 - Added close button in each filter list
- v1.0.12 - Revert to default sorting order ({sort: "id", order: "asc"}
- v1.0.11 - Added "selectionData" props on dataOut -> list of completed row details on selected row
          - Added "overrideProps" in  dataIn - actionBars -> Override all props with same key, also return complete details of selected row
- v1.0.10 - Added some className
          - Added "selection" props on dataOut -> list of selected row
- v1.0.8 - Update types
- v1.0.7 - Adjust Stlyes
         - Added LSGH Styles
- v1.0.6 - Added "selectedFilters" in dataOut
- v1.0.5 - Added "noTotal" in dataIn - table props -> Hide subtotal and grandtotal
- v1.0.4 - Added "overrideProps" in dataIn - table props -> Override all props with same key
- v1.0.3 - Removed default sort and order ({sort: "id", order: "asc"} -> {sort: "", order: ""})
         - Added props "otherProps" in table rowActions
- v1.0.2 - Adjust perPage behavior in pagination
- v1.0.1 - Adjust no row design
- v1.0.0 - Admin Table List Mini App
```

## Installation

```sh
npm install serino-mapp-admin-table-list
```

For manual installation

```sh
npm install --registry http://miniapp.serino.com:4873/ serino-mapp-admin-table-list
```

## Usage

```sh
import { AdminTableListMApp, exampleData } from "serino-mapp-admin-table-list"

// ...
// log exampleData to see the requirements

<TableList {...exampleData} />
```

## Types

```sh
{
  dataLoad: {
    // Table
    rows: { [key: string]: any }[];
    rowsTotal: number;
    subtotal: number | string;
    grandTotal: number | string;
    // Filter List
    filterList: {
      [key: string]: any[];
    };
  };
  dataIn: {
    // View List Title
    title: string;
    tabs: {
      options?: {
        label: string | number;
        value: string | number;
      }[];
    };
    filterSection?: {
      filterProps?: {
        show?: Boolean;
        icons?: { startIcon?: HTMLElement | string, endIcon?: HTMLElement | string }
        label: string;
        options?: {
          name: string;
          key: string[] | string;
          type: "date" | "daterange" | "select";
        }[];
      };
      searchProps?: {
        show?: Boolean;
        placeholder: string;
        string?: number;
      };
      actionProps?: {
        show?: Boolean;
        icons?: { startIcon?: HTMLElement | string, endIcon?: HTMLElement | string }
        label: string;
        options?: {
          name: string;
          action: void;
        }[];
        autoClose?: Boolean;
      };
      redirectionProps?: {
        show?: Boolean;
        icons?: { startIcon?: HTMLElement | string, endIcon?: HTMLElement | string }
        label: string;
        action: void;
      };
    };
    table: {
      overrideProps: { [key: string]: any };  // override all props of table
      selectionKey?: string;
      columns: GridColDef;
      actionBars: {
        label: string;
        action: void;
      }[];
      rowActions: {
        label: string;
        action: void;
        divider?: Boolean;
        autoClose?: Boolean;
      }[];
    };
    styles: {
      [key: string]: CSSProperties;
    };
  };
  dataOut: (arg0: any) => void;
}
```

## Peer Dependecies

```sh
"react": "^17.0.2",
"react-dom": "^17.0.2"
```
