
/* eslint-disable @next/next/no-img-element */
export default function ShowDirectorsMovies({ eachDirectorMovie }) {

    return (
        <div className="flex flex-row">
            {eachDirectorMovie.map(movie => {
                return (
                    <div key={movie.id} >
                        {/* <h1>{movie.title}</h1> */}
                        <img src={movie.image} alt="" className="w-9" />
                    </div>
                )
            })}
        </div>
    )
}