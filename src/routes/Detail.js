import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
function Detail() {
    const { id }= useParams();
    const [loading, setLoading]= useState(true);
    const [movie, setMovie] = useState();
    const getMovie = async ()=>{
        const json= await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
         ).json();
         setMovie(json.data.movie);
         setLoading(false);
    };
    console.log(movie);
    useEffect(()=> {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : 
                <div>
                <img src={movie.medium_cover_image} alt={movie.title}/>
                <h2>{movie.title}</h2>
                <p>개봉연도 : {movie.year} 평점 : {movie.rating} ⭐</p>
                <p>영화설명 : {movie.description_full}</p>
                <ul>
                    {movie.genres.map((g)=> (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
                <p>{movie.torrents[0].url}</p>
                <Link to={`/`}>back</Link>
            </div>
            }
        </div>
    );
}
export default Detail;