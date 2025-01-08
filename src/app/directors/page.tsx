
'use client'
import { useEffect, useState } from "react";
import { fetchGhibliByDirector } from "../data/data";
import { GhibliDirectorType } from "@/Types/ghibliType";
import ShowDirectorsMovies from "../components/ShowDirectorsMovies";

export default function DirectorByNamePage() {

    const [AllmoviesByDirectorArray, setAllMoviesByDirectorArray] = useState<GhibliDirectorType[]>([]);

    useEffect(() => {

        const getDirectorMovies = async () => {

            try {
                const directorsAndMovies = await fetchGhibliByDirector();
                console.log(directorsAndMovies);

                setAllMoviesByDirectorArray(directorsAndMovies);
            } catch (error) {
                console.error("Error fetching director:", error);

            }
        }
        getDirectorMovies()


    }, [])


    return (
        <>
            {AllmoviesByDirectorArray?.map((director, i) => {
                return (
                    <div key={i} className="ml-48">
                        <h1 className="font-extrabold text-4xl text-center mb-8">{director.name}</h1>
                        <ShowDirectorsMovies movies={director.movies} />
                    </div>
                )
            })}
        </>
    )

}