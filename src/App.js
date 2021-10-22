import "./App.css";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import requests from "./requests";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />
      {/* Navbar */}

      {/* Banner */}
      <Banner />
      {/* Banner */}

      {/* Rows */}
      <Row
        title="Netflix Originals  "
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now 🔥 " fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies 💀 " fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies 💖 " fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* Rows */}
    </div>
  );
}

export default App;
