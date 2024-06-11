import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

export const wixClientServer = async () => {
  let refreshToken = "";

  try {
    const cookie = cookies();
    // Checking if we have any refreshToken in the client cookie browser
    refreshToken = JSON.parse(cookie.get("refreshToken")?.value || "{}");
  } catch (error) {}

  const wixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  return wixClient;
};
