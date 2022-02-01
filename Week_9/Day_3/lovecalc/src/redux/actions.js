// export const setFname = (value) => {
//     return {
//         type: 'fname',
//         payload: value
//     }
// }


// export const setSname = (value) => {
//     return {
//         type: 'sname',
//         payload: value
//     }
// }

// SAME AS

export const setNames = (name,value) => {
  return {
    type:name,
    payload: value
  }
}

export const findMatch = (sname,fname) => (dispatch) => {
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      "x-rapidapi-key": ""
    }
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    // this.setState({results:data})
    dispatch({type:'findmatch', payload: data})
  })
  .catch(err => {
    console.error(err);
  });
}

















