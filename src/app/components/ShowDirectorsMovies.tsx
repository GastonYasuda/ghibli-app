/* eslint-disable @next/next/no-img-element */
import { GhibliType } from "@/Types/ghibliType"
import Link from "next/link";
import FavButton from "./FavButton";

interface ShowDirectorsMoviesProps {
    movies: GhibliType[];
}

export default function ShowDirectorsMovies({ movies }: ShowDirectorsMoviesProps) {

    return (
        <div className="flex flex-row">
            {movies.map(movie => {
                return (
                    <div key={movie.id}>

                        <FavButton favMovie={movie} />

                        <Link key={movie.id} href={`${movie.id}`}>
                            <img src={movie.image} alt="movie poster" className="w-60 rounded-lg ease-linear duration-300 hover:scale-[1.05]" />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}