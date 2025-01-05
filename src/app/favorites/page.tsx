/* eslint-disable @next/next/no-img-element */
'use client'
import { GhibliContext } from "@/Context/Context"
import { GhibliContextProviderProps } from "@/Types/ghibliType"
import { useContext } from "react"

export default function FavoritesPage() {

    const { favoritesArray } = useContext(GhibliContext) as GhibliContextProviderProps

    return (
        <>
            <h1>LOS FAVORITOS</h1>
            {favoritesArray.map((eachMovie) => {
                return (
                    <div key={eachMovie.id}>
                        <h3>{eachMovie.title}</h3>
                        <img src={eachMovie.image} alt={eachMovie.title} />
                    </div>
                )
            })}
        </>
    )
}