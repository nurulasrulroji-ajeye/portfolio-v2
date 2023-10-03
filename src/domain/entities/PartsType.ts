import React from "react"

export type TNavList = {
    id: string
    label: string
}

export interface ISendGmail {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export type TTabs = {
    id: string,
    name: string,
    icon?: React.JSX.Element
}

export type THorizonInfinity = {
    id: number
    icon: React.JSX.Element
}

