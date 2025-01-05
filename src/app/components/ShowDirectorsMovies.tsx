import { GhibliDirectorType } from "@/Types/ghibliType"

/* eslint-disable @next/next/no-img-element */
export default function ShowDirectorsMovies({ movies }: GhibliDirectorType[]) {

    return (
        <div className="flex flex-row">
            {movies.map(movie => {
                return (
                    <div key={movie.id} >
                        <img src={movie.image} alt="" className="w-9" />
                    </div>
                )
            })}
        </div>
    )
}