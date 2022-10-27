import { CSSProperties } from "react";

export interface ITableList {
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
    values?: any;
    loading?: Boolean;
    // View List Title
    title: string;
    tabs: {
      label: string | number;
      value: string | number;
    }[];
    filterSection?: {
      filterProps?: {
        label: string;
        icons?: {
          startIcon?: HTMLElement | string;
          endIcon?: HTMLElement | string;
        };
        show?: Boolean;
        options?: {
          name: string;
          key: string[] | string;
          type: string | "date" | "daterange" | "select";
        }[];
      };
      searchProps?: {
        show?: Boolean;
        placeholder?: string;
      };
      actionProps?: {
        show?: Boolean;
        label: string;
        icons?: {
          startIcon?: HTMLElement | string;
          endIcon?: HTMLElement | string;
        };
        options?: {
          name: string;
          action: () => void;
        }[];
      };
      redirectionProps?: {
        show?: Boolean;
        label: string;
        icons?: {
          startIcon?: HTMLElement | string;
          endIcon?: HTMLElement | string;
        };
        action: () => void;
      };
    };
    table: {
      noTotal?: Boolean;
      overrideProps?: {
        [key: string]: any;
      };
      selectionKey?: string;
      columns?: { [key: string]: any }[];
      actionBars: {
        label: string;
        action: (arg0: any) => void;
      }[];
      rowActions: {
        label: string;
        action: (arg0: any) => void;
        divider?: Boolean;
        autoClose?: Boolean;
      }[];
    };
    styles?: {
      [key: string]: CSSProperties | any;
    };
  };
  dataOut: (arg0: any) => void;
}

export const IData = {
  dataLoad: {
    rows: { "[key: string]": "any" },
    rowsTotal: "number",
    subtotal: "number | string",
    grandTotal: "number | string",
    filterList: [{ "[key: string]": "any[]" }],
  },
  dataIn: {
    title: "string",
    tabs: {
      options: [{ label: "string | number", value: "string | number" }],
    },
    filterSection: {
      filterProps: {
        show: "Boolean (optional)",
        options: [
          {
            name: "string",
            key: "string[] | string",
            type: "date | daterange | select",
          },
        ],
      },
      searchProps: { show: "Boolean (optional)", placeholder: "string" },
      actionProps: {
        show: "Boolean (optional)",
        options: [{ name: "string", action: "void" }],
      },
      redirectionProps: {
        show: "Boolean (optional)",
        label: "string",
        action: "void",
      },
    },
    table: {
      noTotal: "Boolean (optional)",
      overrideProps: "{ [key: string]: any } (optional)",
      selectionKey: "string (optional)",
      columns: "GridColDef - https://mui.com/x/api/data-grid/grid-col-def/",
      actionBars: [
        {
          label: "string",
          action: "void",
        },
      ],
      rowActions: [
        {
          label: "string",
          action: "void",
          divider: "Boolean (optional)",
        },
      ],
    },
    styles: {
      "[key: string]": "CSSProperties",
    },
  },
  dataOut: "(arg0: any) => void",
};
