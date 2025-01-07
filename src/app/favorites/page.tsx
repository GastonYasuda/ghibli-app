/* eslint-disable @next/next/no-img-element */
'use client'
import { GhibliContext } from "@/Context/Context"
import { GhibliContextProviderProps } from "@/Types/ghibliType"
import { useContext } from "react"
import FavButton from "../components/FavButton"
import Link from "next/link"

export default function FavoritesPage() {

    const { favoritesArray } = useContext(GhibliContext) as GhibliContextProviderProps

    return (
        <>
            <h1>LOS FAVORITOS</h1>
            <div className="flex flex-row flex-wrap gap-5">

                {favoritesArray.map((eachMovie) => {
                    return (
                        <div key={eachMovie.id} className="w-60 relative">

                            <FavButton favMovie={eachMovie} />


                            <Link key={eachMovie.id} href={`/movie/${eachMovie.id}`}>
                                <div className="w-60 rounded-lg  overflow-hidden">
                                    <img src={eachMovie.image} alt="Movie poster" className="ease-linear duration-300 hover:scale-[1.1] hover:opacity-70" />
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}