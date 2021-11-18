import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";
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
    <div class={styles.detail}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div class={styles.detailBox}>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h1>{movie.title}</h1>
          <div>
            <p>영화설명 : </p>
            <p>{movie.description_full}</p>
          </div>
          <div class={styles.infoBox}>
            <div>
              <span>개봉연도 : {movie.year}</span>
              <span>⭐평점⭐ : {movie.rating}</span>
            </div>
            <div>
              <span>장르 : </span>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>링크 : </p>
              {movie.torrents[0].url ? (
                <a href={movie.torrents[0].url} target={`_blank`} id={styles.aLink}>
                  토렌트 다운로드
                </a>
              ) : null}
              {movie.yt_trailer_code ? (
                <a href={`https://youtu.be/${movie.yt_trailer_code}`} target={`_blank`} id={styles.aLink}>
                  유튜브 트레일러
                </a>
              ) : null}
            </div>
          </div>
          <button>
            <Link to="/home">❌</Link>
          </button>
        </div>
      )}
    </div>
    
  );
}
export default Detail;