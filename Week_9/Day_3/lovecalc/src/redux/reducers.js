const initState = {
    fname:'',
    sname:'',
    results: {}
  }
  
  export const reducer = (state=initState, action={}) => {
    switch (action.type) {
      case 'fname':
        console.log('fname', state.fname);
        return {...state, fname:action.payload}
      case 'sname':
        console.log('sname', state.sname);
        return {...state, sname:action.payload}
      case 'findmatch':
        return {...state, results:action.payload}
      default:
        return {...state}
    }
  }
  