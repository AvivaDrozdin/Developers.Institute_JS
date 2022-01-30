export const handleChangeOne = (targetValue) => {
    return {
        // defines action:
        type: 'PROP_ONE',
        // Value that we will get
        payload: targetValue
    }
}



export const handleClick = (targetValue) => {
    return {
        type: 'PROP_TWO',
        payload: targetValue
    }
}