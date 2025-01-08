'use client'
import { useEffect, useState } from "react";
import { fetchGhibliByDirector, fetchGhibliByDirectorName } from "../../data/data";
import { GhibliDirectorType } from "@/Types/ghibliType";
import ShowDirectorsMovies from "../../components/ShowDirectorsMovies";
import { usePathname } from "next/navigation";
interface DirectorPageProps {
    directorId?: string;
}

export default function DirectorPage({ directorId }: DirectorPageProps) {

    const [movieByDirector, setMovieByDirector] = useState<GhibliDirectorType>();
    const [AllmoviesByDirectorArray, setAllMoviesByDirectorArray] = useState<GhibliDirectorType[]>([]);

    const pathName = usePathname().split("/").pop()


    useEffect(() => {

        const getDirectorData = async () => {
            try {
                if (directorId) {
                    const directorsAndMovies = await fetchGhibliByDirectorName(directorId);
                    setMovieByDirector(directorsAndMovies);

                } else if (!directorId) {
                    const directorsAndMovies = await fetchGhibliByDirector();
                    setAllMoviesByDirectorArray(directorsAndMovies);
                }
            } catch (error) {
                console.error("Error fetching director:", error);
            }
        }
        getDirectorData()

    }, [directorId])

    return (
        <section className="ml-48">
            {pathName !== 'directors' && movieByDirector !== undefined ?
                <>
                    <h1>{movieByDirector.name}</h1>
                    <ShowDirectorsMovies movies={movieByDirector.movies} />
                </>
                :
                <>
                    {AllmoviesByDirectorArray?.map((director, i) => {
                        return (
                            <div key={i}>
                                <h1 className="font-extrabold text-4xl text-center mb-8">{director.name}</h1>
                                <ShowDirectorsMovies movies={director.movies} />
                            </div>
                        )
                    })}
                </>
            }
        </section>
    )
}