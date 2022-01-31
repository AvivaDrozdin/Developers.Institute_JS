const MovieList = (props) => {

    const {movies,selectMovie} = props;
  
    const list = movies.map((item,i)=>{
        return (
          <div key={i}>
            <span>{item.title}</span>
            <button onClick={()=>selectMovie(item)}>Detail</button>
          </div>
        )
    })
    return (
      <>
        <h2>Movie List</h2>
        {list}
      </>
    )
  }
  export default MovieList
  