function Movie(props) {
    const IMG_API = `https://image.tmdb.org/t/p/w500/${props.poster_path}`;
    return (
      <div class="movie">
        <img src={IMG_API} alt={props.title} />
        <div class="movie-info">
            <span id="movie-title">{props.title}</span>
            <span id="movie-vote-average">{props.vote_average}</span>
        </div>
      </div>
    );
  }
  
  export default Movie;