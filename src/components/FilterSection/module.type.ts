import { CSSProperties } from "react";

export interface IFilterSection {
  dataIn: {
    filterProps?: {
      show?: Boolean;
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
      options?: {
        name: string;
        action: void;
      }[];
      autoClose?: Boolean;
    };
    redirectionProps?: {
      show?: Boolean;
      label: string;
      action: void;
    };
    styles?: {
      [key: string]: CSSProperties;
    };
  };
}
