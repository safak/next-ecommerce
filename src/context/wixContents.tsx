"use client"

import { createClient, OAuthStrategy } from "@wix/sdk";
import {products, collections} from "@wix/stores"
import Cookies from "js-cookie"
import { ReactNode, createContext } from "react";
 
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}") 

const wixClient = createClient({
    modules: {
      products,
      collections,
    //   currentCart,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken, 
        accessToken: { value: "", expiresAt: 0}, 
      },
    })
  });

  export type WixClient = typeof wixClient;
  
  export const WixClientContext = createContext<WixClient>(wixClient);

  export const WixClientContextProvider = ({
    children
}:{
    children: ReactNode

}) => {
    return(

        <WixClientContext.Provider value={wixClient}>
            {children}
        </WixClientContext.Provider>
    );
}