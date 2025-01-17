'use client'
import { useEffect, useState } from "react";
import { fetchGhibliByDirectorName } from "../../data/data";
import { GhibliDirectorType } from "@/Types/ghibliType";
import ShowDirectorsMovies from "../../components/ShowDirectorsMovies";
import { usePathname } from "next/navigation";

export default function DirectorPage() {

    // 

    const pathName = usePathname()
    const pathNamePop = pathName.replace(/%20/g, " ").split("/").pop();
    const pathNameReplace = pathNamePop && decodeURIComponent(pathNamePop)

    const [movieByDirector, setMovieByDirector] = useState<GhibliDirectorType>();


    useEffect(() => {

        const getDirectorData = async () => {
            try {
                if (pathNameReplace) {
                    const directorsAndMovies = await fetchGhibliByDirectorName(pathNameReplace);
                    setMovieByDirector(directorsAndMovies);
                }
            } catch (error) {
                console.error("Error fetching director:", error);
            }
        }
        getDirectorData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="font-extrabold text-4xl text-center mb-8">
                <h1 className="font-extrabold text-4xl text-center mt-8 mb-8">{movieByDirector?.name}</h1>
                {movieByDirector && <ShowDirectorsMovies movies={movieByDirector.movies} />}
            </div>
        </>
    )
}