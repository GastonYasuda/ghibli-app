import { GhibiliType } from "@/Types/ghibliType";


export const fetchGhibli = async (title: GhibiliType['title']) => {
    const response = await fetch("https://ghibliapi.vercel.app/films");
    const movies: GhibiliType[] = await response.json();

    // Filter movies by title (case-insensitive)
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(title.toLowerCase())
    );
    return filteredMovies
};

export const fetchGhibliById = async (id: GhibiliType['id']) => {
    const data = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
    return data.json();
};
