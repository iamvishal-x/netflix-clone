import { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
// base url to display the poster, basically appending the poster link
const base_url = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //   useEffect(async () => {
  //     const fetchData = () => {
  //       const requests = await axios.get(fetchUrl);
  //       console.log(requests);
  //     };
  //     fetchData();
  //   }, []);
  ////////////////////////////
  // displaying movie list
  useEffect(() => {
    const fetchData = async () => {
      const requests = await axios.get(fetchUrl);
      //   console.log(requests);
      setMovies(requests.data.results);
    };
    fetchData();
  }, [fetchUrl]);
  // displaying movie list
  /////////////////////////////
  // function for movie trailer (npm i movie-trailer react-youtube)
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => alert("Sorry, There is no trailer for this movie"));
    }
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  // function for movie trailer (npm i movie-trailer react-youtube)
  //////////////////////////////////////
  return (
    <div className="row">
      {/* Title */}
      <h2> {title} </h2>
      {/* Title */}

      {/* Container -> Posters */}
      <div className="row__posters">
        {/* several row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* Container -> Posters */}
    </div>
  );
};

export default Row;
