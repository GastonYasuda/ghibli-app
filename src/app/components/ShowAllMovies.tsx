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

        <div className="flex flex-col" >

            <div className="flex flex-row flex-wrap gap-5">

                {showGhibliAllMovies.map((eachMovie) => {
                    return (
                        <div key={eachMovie.id} className="relative">

                            <FavButton favMovie={eachMovie} />


                            <Link key={eachMovie.id} href={`${eachMovie.id}`}>
                                <div className="w-60 rounded-lg  overflow-hidden">
                                    <img src={eachMovie.image} alt="Movie poster" className="ease-linear duration-300 hover:scale-[1.1] hover:opacity-70" />
                                </div>
                            </Link>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}



// if (fav) {
//     // If is Fav, remove from array
//     setFavorites((prev) => prev.filter((book) => book.ISBN !== bookClick.ISBN));
//     setFav(false);
//     removeNotify()
// } else {
//     setFavorites((prev) => [...prev, bookClick]);
//     setFav(true);
//     addNotify()
// }