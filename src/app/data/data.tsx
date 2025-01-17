import { GhibliDirectorType, GhibliType } from "@/Types/ghibliType";

//GET BY ID
export const fetchGhibliById = async (id: GhibliType['id']) => {
    const data = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
    return data.json();
};

//GET BY DIRECTOR
export const fetchGhibliByDirector = async () => {
    const ghibliAllMovies = await fetchGhibli('');

    // Obtener todos los directores únicos
    const ghibliDirectors: string[] = [...new Set(ghibliAllMovies.map(movie => movie.director))];

    // Crear un array de directores con sus películas
    const directorsAndMovies: GhibliDirectorType[] = ghibliDirectors.map(director => {
        const moviesFromDirector = ghibliAllMovies.filter(movie => movie.director === director);
        return {
            name: director,
            movies: moviesFromDirector
        };
    });
    return directorsAndMovies;

};


//GET BY DIRECTOR NAME
export const fetchGhibliByDirectorName = async (directorName: GhibliType['director']) => {
    const ghibliAllMovies = await fetchGhibli('');

    // Obtener todas las peliculas del director
    const directorMovie = ghibliAllMovies.filter(movies =>
        movies.director.toLowerCase().includes(directorName.toLowerCase())
    );

    // Crear un array de directores con sus películas
    return {
        name: directorName,
        movies: directorMovie
    };

};


//GET BY TITLE
export const fetchGhibli = async (title: GhibliType['title']) => {
    const data = await fetch("https://ghibliapi.vercel.app/films");
    const movies: GhibliType[] = await data.json();

    // Filter movies by title (case-insensitive)
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(title.toLowerCase())
    );
    return filteredMovies
};
