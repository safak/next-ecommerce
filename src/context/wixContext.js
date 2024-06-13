"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products } from "@wix/stores";
import Cookies from "js-cookie";
import { createContext } from "react";

// Checking if we have any refreshToken in the client cookie browser
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const wixClient = createClient({
  modules: {
    products,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export const WixClientContext = createContext(wixClient);

export const WixClientContextProvider = ({ children }) => {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
};
