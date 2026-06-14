import { JSX } from "react";

export type Service = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
};
