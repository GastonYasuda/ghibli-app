'use client'
import { GhibliContextProviderProps, GhibliType } from "@/Types/ghibliType";
import { createContext, useEffect, useState } from "react";

export const GhibliContext = createContext({});

export function GhibliContextProvider({ children }: GhibliContextProviderProps) {

    const [favoritesArray, setFavoritesArray] = useState<GhibliType[]>(() => {
        const storedFavs = JSON.parse(localStorage.getItem('GhibliFavMovie') || '[]');
        return storedFavs;
    })

    useEffect(() => {
        localStorage.setItem("GhibliFavMovie", JSON.stringify(favoritesArray));

    }, [favoritesArray])


    return (
        <GhibliContext.Provider value={{ favoritesArray, setFavoritesArray }}>
            {children}
        </GhibliContext.Provider>
    );
}
