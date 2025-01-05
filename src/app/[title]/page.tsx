"use client"
import MovieDetail from "../movieDetail/MovieDetail";
import { usePathname } from "next/navigation";

export default function ShowByTitle() {

    const pathName = usePathname()
    const pathId = pathName.split("/").pop();



    return (
        <>
            <MovieDetail pathId={pathId} />
        </>
    )
}