import { movies } from "./movieDummy";
import Movie from "./Components/Movie";
function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Movie 
              title = {item.title}
              vote_average = {item.vote_average}
              poster_path = {item.poster_path}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
