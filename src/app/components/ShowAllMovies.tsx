/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";
import { fetchGhibli } from "../data/data";
import { useEffect, useState } from "react";
import { GhibliType } from "@/Types/ghibliType";
import FavButton from "./FavButton";

export default function Home() {
    const [showGhibliAllMovies, setShowGhibliAllMovies] = useState<GhibliType[]>([]);

    useEffect(() => {

        const showAllMovies = async () => {
            try {
                const ghibliAllMovies = await fetchGhibli('')
                setShowGhibliAllMovies(ghibliAllMovies)

            } catch (error) {
                console.error('Error fetching All Movies', error)
            }
        }
        showAllMovies()

    }, [])


    return (

        < >
            <h1 className="font-extrabold text-4xl text-center mt-8 mb-8">Ghibli Movies</h1>

            <div className="flex flex-row flex-wrap gap-2 overflow-auto justify-start md:justify-center mb-16 w-11/12 m-auto">


                {showGhibliAllMovies.map((eachMovie) => {
                    return (
                        <div key={eachMovie.id} className="relative m-auto flex flex-col flex-wrap">

                            <FavButton favMovie={eachMovie} />

                            <Link key={eachMovie.id} href={`/movie/${eachMovie.id}`}>
                                <div className="w-40 rounded-lg  overflow-hidden">
                                    <img src={eachMovie.image} alt="Movie poster" className="ease-linear duration-300 hover:scale-[1.1] hover:opacity-70" />
                                </div>
                            </Link>
                        </div>
                    )
                })}

            </div>
        </>
    );
}

