let initialState = {
    one: 'New One',
    two: 'New Two',
    bbb: 'BBB Text'
}

// Exporting function reducer
export const reducer = (state=initialState, action={}) => {                  // reassigning / adding    
    // return {...state, one:'New two', aaa:'text aaa'}

    // return {...state, two:'Changed Two', aaa:'aaa text' }

    switch (action.type) {
        case 'PROP_ONE':
            return{...state, one:action.payload}
        case 'PROP_TWO':
            return{...state, two:action.payload}
        default:
            return{...state}
    }
}