/* eslint-disable @next/next/no-img-element */
// src/app/[title]/movieDetail/page.tsx

'use client'; // Asegúrate de usar 'use client' si estás trabajando con código de cliente en Next.js 13

import { GhibliType } from "@/Types/ghibliType"; // Asegúrate de que la ruta de importación sea correcta
import { fetchGhibliById } from "../../data/data"; // Verifica la ruta correcta
import { useEffect, useState } from "react";

interface MovieDetailProps {
    pathId: GhibliType['id']; // Tipo correcto para pathId
}

const MovieDetail = ({ pathId }: MovieDetailProps) => {
    const [loading, setLoading] = useState(true);
    const [movieByPathId, setMovieByPathId] = useState<GhibliType | null>(null);

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
                    <p>{movieByPathId?.title}</p>
                    <img src={movieByPathId?.image} alt="movie poster" />
                </>
            )}
        </div>
    );
};

export default MovieDetail; // Asegúrate de exportar correctamente
