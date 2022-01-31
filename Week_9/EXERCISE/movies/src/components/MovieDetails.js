const MovieDetail = (props) => {
    const {detail} = props;
    if(!detail) {
      return(
        <>
          <h2>Movie Detail</h2>
          <p>Please click on a movie</p>
        </>
      )
    }
    else {
      return(
        <>
          <h2>Movie Detail</h2>
          <p>Title: {detail.title}</p>
          <p>Release Date: {detail.releaseDate}</p>
          <p>Rating: {detail.rating}</p>
        </>
      )
    }
  
  }
  export default MovieDetail
  