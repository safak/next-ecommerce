"use client";

import { WixClientContext } from "@/context/wixContext";
import { useContext } from "react";

const useWixClient = () => {
  return useContext(WixClientContext);
};

export default useWixClient;
