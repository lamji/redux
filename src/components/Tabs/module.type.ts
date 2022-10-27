import { CSSProperties, ReactNode } from "react";

export interface ITabs {
  dataIn: {
    tabs: {
      label: string | number;
      value: string | number;
    }[];
    initial: string | number;
    styles?: {
      [key: string]: CSSProperties;
    };
  };
  children: ReactNode;
}
