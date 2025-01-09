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
                    <section className="relative z-20 pt-8">
                        <div className="text-center">
                            <span className="font-extrabold text-4xl mb-8">{movieByPathId?.title}</span>
                            <h5 className="mb-7">{movieByPathId?.original_title}</h5>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-5 md:w-1/2 w-10/12 m-auto">
                            <div className="md:flex-1 md:w-48 w-full relative">
                                <FavButton favMovie={movieByPathId} />
                                <img src={movieByPathId?.image} alt="movie poster" className="rounded-lg md:mb-16 mb-11" />
                            </div>

                            <section className="md:flex-1 h-full bg-white/50 backdrop-blur-md p-5 rounded-lg">
                                <div className="flex flex-col w-10/12 m-auto">

                                    <h6 className="font-black">Sinopsis:</h6>
                                    <p>{movieByPathId?.description}</p>
                                    <p>Year: {movieByPathId?.release_date}</p>
                                    <div className="inline-flex gap-1">
                                        <span>Director:</span>
                                        <Link href={`/directors/${movieByPathId?.director}`}>
                                            <p className="text-blue-600 hover:text-blue-900">{movieByPathId?.director}</p>
                                        </Link>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </section>

                    <div className="absolute h-full top-0 blur-md opacity-70">
                        <img src={movieByPathId?.movie_banner} alt="movie banner" className="w-screen h-screen -z-10" />
                    </div>
                </div>
            )}
        </div>
    );
};

