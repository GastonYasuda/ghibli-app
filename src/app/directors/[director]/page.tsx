'use client'
import { usePathname } from "next/navigation";
import DirectorPage from "../page";

export default function DirectorByNamePage() {

    const pathName = usePathname()
    const pathNameReplace = pathName.replace(/%20/g, " ").split("/").pop();




    return <DirectorPage directorId={pathNameReplace} />
}