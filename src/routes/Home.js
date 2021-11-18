import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";


function Home() {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState("9");
  const [movies, setMovies] = useState([]);
  
  const onSelect = (e) => {
    setIndex(e.target.value);
    setLoading(true);
    return index;
  }
  
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${index}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  
  useEffect(() => {
    getMovies();
  }, [index]);

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div>
          <h2>영화목록</h2>
          <span>평점 </span>
          <select value={index} onChange={onSelect}>
            <option value="9"> 9점 </option>
            <option value="8"> 8점 </option>
            <option value="7"> 7점 </option>
            <option value="6"> 6점 </option>
            <option value="5"> 5점 </option>
            <option value="4"> 4점 </option>
          </select>
          <span> 이상</span>
        </div>
      </div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
