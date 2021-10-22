import { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);
  // console.log(movie);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* title */}
        {/* div -> 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* div -> 2 buttons */}
        {/* desc */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 300)}
        </h1>
        {/* desc */}
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;