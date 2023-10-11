import { movies } from "./movieDummy";
import Movie from "./Components/Movie";
import MovieDetail from "./Components/MovieDetail";
function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <div className="movie-block">
                <Movie
                title={item.title}
                vote_average={item.vote_average}
                poster_path={item.poster_path} />
                <MovieDetail
                  title={item.title}
                  overview={item.overview} /></div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
