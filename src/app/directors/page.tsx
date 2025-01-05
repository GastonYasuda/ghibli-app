'use client'
import { useEffect, useState } from "react";
import { fetchGhibliByDirector } from "../data/data";
import { GhibiliDirectorType } from "@/Types/ghibliType";
import ShowDirectorsMovies from "../components/ShowDirectorsMovies";

export default function DirectorPage() {

    const [movieByDirector, setMovieByDirector] = useState<GhibiliDirectorType[]>([]);


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
                    <>
                        <h1 key={i}>{director.name}</h1>
                        <ShowDirectorsMovies eachDirectorMovie={director.movies} />
                    </>
                )
            })}
            {/* <ShowDirectors directorSelected={directorSelected} /> */}
        </>
    )
}