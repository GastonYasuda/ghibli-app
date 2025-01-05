'use client'
import { GhibliType } from "@/Types/ghibliType";
import { createContext, ReactNode, useEffect, useState } from "react";

export const GhibliContext = createContext({});

interface Props {
    children: ReactNode;
}

export function GhibliContextProvider({ children }: Props) {

    const [favoritesArray, setFavoritesArray] = useState<GhibliType[]>([])

    useEffect(() => {
        const storedFavs = JSON.parse(localStorage.getItem("GhibliFavMovie") || "[]");
        setFavoritesArray(storedFavs);
    }, []);

    // save the favorites in LocalStorage
    useEffect(() => {
        localStorage.setItem("GhibliFavMovie", JSON.stringify(favoritesArray));
    }, [favoritesArray]);


    return (
        <GhibliContext.Provider value={{ favoritesArray, setFavoritesArray }}>
            {children}
        </GhibliContext.Provider>
    );
}
