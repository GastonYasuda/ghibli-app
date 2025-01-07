/* eslint-disable @next/next/no-img-element */
'use client'

import { GhibliType } from "@/Types/ghibliType";
import { useEffect, useState } from "react";
import FavButton from "@/app/components/FavButton";
import Link from "next/link";
import { fetchGhibliById } from "@/app/data/data";

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
                <div>
                    <h1>Movie Detail</h1>

                    <p>{movieByPathId?.title}</p>

                    <div className="w-60 relative">
                        <FavButton favMovie={movieByPathId} />
                        <img src={movieByPathId?.image} alt="movie poster" className="rounded-lg" />
                    </div>
                    <section>
                        <p>{movieByPathId?.title}</p>
                        <p>{movieByPathId?.original_title}</p>
                        <p>{movieByPathId?.description}</p>
                        <p>{movieByPathId?.release_date}</p>
                        <Link href={`/directors/${movieByPathId?.director}`}>
                            <p>{movieByPathId?.director}</p>
                        </Link>

                        {/* movie_banner */}
                    </section>
                </div>
            )}
        </div>
    );
};

