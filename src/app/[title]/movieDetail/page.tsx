/* eslint-disable @next/next/no-img-element */

import { GhibliType } from "@/Types/ghibliType";
import { fetchGhibliById } from "../../data/data";
import { useEffect, useState } from "react";
import FavButton from "@/app/components/FavButton";

interface MovieDetailProps {
    pathId: GhibliType['id'];
}

export default function MovieDetail({ pathId }: MovieDetailProps) {
    const [loading, setLoading] = useState(true);
    const [movieByPathId, setMovieByPathId] = useState<GhibliType>();

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
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1>Movie Detail</h1>
                    <FavButton favMovie={movieByPathId} />

                    <p>{movieByPathId?.title}</p>
                    <img src={movieByPathId?.image} alt="movie poster" />
                </>
            )}
        </div>
    );
};

