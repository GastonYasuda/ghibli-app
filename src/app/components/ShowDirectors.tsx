import { useState } from "react"
import { fetchGhibli } from "../data/data"

export default async function ShowDirectors() {


    const ghibliAllMovies = await fetchGhibli('')

    const directorsName = ghibliAllMovies.map(movies => movies.director)

    const director = [...new Set(directorsName)]
    //un array con las peliculas por cada director
    //recorra todas las peliculas que coincidan con el director
    //todas las peliculas que coincidadn con el mismo director


    //por cada array de cada director me tiene que aparecer todas sus peliculas

    for (const movie of ghibliAllMovies) {
        for (const dire of director) {
            if (movie.director === dire) {
                console.log('titulo', movie.title);
                console.log('director', movie.director);

            }
        }
    }


    return (
        <>
            {director.map((movies, index) => {
                return (
                    <button key={index} >
                        <h5>{movies}</h5>
                    </button>
                )
            })}
        </>
    )
}