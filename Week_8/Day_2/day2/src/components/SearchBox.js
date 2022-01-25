const SearchBox = (props) => {
    // console.log(props.searchItem);
    return(
      <>
        <h4>Serach</h4>
        <div>
          <input type='text' onChange={props.searchItem}/>
          <button onClick={props.searchClick}>Search</button>
        </div>
      </>
    )
  }
  export default SearchBox;
  