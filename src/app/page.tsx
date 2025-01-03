/* eslint-disable @next/next/no-img-element */
import { fetchGhibli } from "./data/data";

export default async function Home() {

  const ghibliAllFilms = await fetchGhibli('')


  return (
    <div>

      {ghibliAllFilms.map((eachMovie, index) => {
        return (
          <div key={index} className="mb:w-full">
            <h1>{eachMovie.title}</h1>
            <img src={eachMovie.image} alt="Movie poster" />
          </div>
        )
      })}

    </div>
  );
}
