/* eslint-disable @next/next/no-img-element */
'use client'
import { GhibliContext } from "@/Context/Context"
import { GhibliContextProviderProps } from "@/Types/ghibliType"
import { useContext } from "react"
import FavButton from "../components/FavButton"
import Link from "next/link"
import notMovies from "../../../public/favsImg.png"

export default function FavoritesPage() {

    const { favoritesArray } = useContext(GhibliContext) as GhibliContextProviderProps

    return (
        <>
            <h1 className="font-extrabold text-4xl text-center mt-8 mb-8">Favorites</h1>
            <div className={`flex flex-row gap-2 overflow-auto flex-wrap justify-center mb-16 ${favoritesArray.length <= 2 && `justify-center`}`}>
                {/* <div className={`flex flex-row gap-2 overflow-auto flex-wrap justify-center mb-16 ${movies.length <= 2 && `justify-center`}`}> */}

                {favoritesArray.length === 0 ?
                    <section className="flex flex-col items-center">
                        <h1>You don&apos;t have favorite movies</h1>
                        <img src={notMovies.src} alt="Not movies" className="md:w-3/4" />
                    </section>
                    :
                    <>      {
                        favoritesArray.map((eachMovie) => {
                            return (
                                <div key={eachMovie.id} className="relative">

                                    <FavButton favMovie={eachMovie} />


                                    <Link key={eachMovie.id} href={`/movie/${eachMovie.id}`}>
                                        <div className="w-40 rounded-lg  overflow-hidden">
                                            <img src={eachMovie.image} alt="Movie poster" className="ease-linear duration-300 hover:scale-[1.1] hover:opacity-70" />
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    </>
                }

            </div>
        </>
    )
}