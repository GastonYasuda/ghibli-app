/* eslint-disable @next/next/no-img-element */
import { GhibliType } from "@/Types/ghibliType"
import Link from "next/link";
import FavButton from "./FavButton";

interface ShowDirectorsMoviesProps {
    movies: GhibliType[];
}

export default function ShowDirectorsMovies({ movies }: ShowDirectorsMoviesProps) {

    return (
        <div className="flex flex-row gap-5 overflow-auto md:flex-wrap justify-center mb-16">
            {movies.map(movie => {
                return (
                    <div key={movie.id} className="w-60 relative">

                        <FavButton favMovie={movie} />

                        <Link key={movie.id} href={`/movie/${movie.id}`}>
                            <div className="w-60 rounded-lg  overflow-hidden">
                                <img src={movie.image} alt="Movie poster" className=" ease-linear duration-300 hover:scale-[1.1] hover:opacity-70" />
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}