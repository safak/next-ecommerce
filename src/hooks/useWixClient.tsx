"use client";

import { WixClientContext } from "@/context/wixContext";
import { useContext } from "react";

export const useWixClient = () => {
  return useContext(WixClientContext);
};
