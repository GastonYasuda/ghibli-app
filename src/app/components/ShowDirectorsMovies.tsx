import { GhibliType } from "@/Types/ghibliType"
import Link from "next/link";

interface ShowDirectorsMoviesProps {
    movies: GhibliType[];
}

/* eslint-disable @next/next/no-img-element */
export default function ShowDirectorsMovies({ movies }: ShowDirectorsMoviesProps) {

    return (
        <div className="flex flex-row">
            {movies.map(movie => {
                return (
                    <Link key={movie.id} href={`${movie.id}`}>
                        <img src={movie.image} alt="movie poster" className="w-60 rounded-lg ease-linear duration-300 hover:scale-[1.05]" />
                    </Link>
                )
            })}
        </div>
    )
}