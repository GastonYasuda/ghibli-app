/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { fetchGhibli } from "../data/data";

export default async function Home() {

    const ghibliAllMovies = await fetchGhibli('')


    return (

        <div className="flex flex-col" >

            <div className="flex flex-row flex-wrap gap-5">

                {ghibliAllMovies.map((eachMovie) => {
                    return (
                        <Link key={eachMovie.id} href={`${eachMovie.id}`}>
                            <img src={eachMovie.image} alt="Movie poster" className="w-60 rounded-lg ease-linear duration-300 hover:scale-[1.05]" />
                        </Link>
                    )
                })}

            </div>
        </div>
    );
}
