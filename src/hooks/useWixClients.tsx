"use client"

import { WixClientContext } from "@/context/wixContents"
import { useContext } from "react"

export const useWixClient = () => {
    return useContext(WixClientContext)
}
