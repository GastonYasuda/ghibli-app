/* eslint-disable @next/next/no-img-element */
import { GhibiliType } from "@/Types/ghibliType"
import { fetchGhibliById } from "../../data/data"
import { useEffect, useState } from "react";


export default function MovieDetail({ pathId }: GhibiliType['id']) {

    const [loading, setLoading] = useState(true);
    const [movieByPathId, setMovieByPathId] = useState<GhibiliType | null>(null);



    useEffect(() => {

        const fetchMovie = async () => {
            try {
                setLoading(true);
                const movie = await fetchGhibliById(pathId);
                setMovieByPathId(movie);
            } catch (error) {
                console.error("Error fetching movie:", error);
            } finally {
                setLoading(false);
            }
        };
        if (pathId) {
            fetchMovie();
        }

    }, [pathId]);

    return (
        <div>
            {loading ? <p>Loading...</p> :
                <>
                    <h1>Movie Detail</h1>
                    <p>{movieByPathId?.title}</p>
                    <img src={movieByPathId?.image} alt="movie poster" />
                </>}
        </div>
    )
}