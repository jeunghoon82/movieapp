import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>
            개봉연도 : {movie.year} 평점 : {movie.rating} ⭐
          </p>
          <p>영화설명 : {movie.summary}</p>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>
            {movie.torrents[0].url ? (
              <a href={movie.torrents[0].url} target="_blank"> 토렌트 다운로드 </a>
            ) : null}
          </p>
          <p>
            {movie.yt_trailer_code ? (
              <a href={`https://youtu.be/${movie.yt_trailer_code}`} target="_blank"> 유튜브 트레일러 </a>
            ) : null}
          </p>
        </div>
      )}
    </div>
  );
}
export default Detail;
