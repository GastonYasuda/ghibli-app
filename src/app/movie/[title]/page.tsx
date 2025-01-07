"use client"
import { usePathname } from "next/navigation";
import MovieDetail from "./movieDetail/movieDetail";

export default function ShowByTitle() {

    const pathName = usePathname()
    const pathId = pathName.split("/").pop();


    return <MovieDetail pathId={pathId} />

}