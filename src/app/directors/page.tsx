'use client'
import { useEffect, useState } from "react";
import { fetchGhibliByDirector } from "../data/data";
import { GhibliDirectorType } from "@/Types/ghibliType";
import ShowDirectorsMovies from "../components/ShowDirectorsMovies";

export default function DirectorPage() {

    const [movieByDirector, setMovieByDirector] = useState<GhibliDirectorType[]>([]);


    useEffect(() => {
        const getDirectorData = async () => {
            try {
                const directorsAndMovies = await fetchGhibliByDirector();
                console.log(directorsAndMovies);

                setMovieByDirector(directorsAndMovies);
            } catch (error) {
                console.error("Error fetching director:", error);
            }
        }
        getDirectorData()

    }, [])







    return (
        <>
            <h1>hola soy directors</h1>
            {movieByDirector.map((director, i) => {
                return (
                    <div key={i}>
                        <h1>{director.name}</h1>
                        <ShowDirectorsMovies movies={director.movies} />
                    </div>
                )
            })}
        </>
    )
}