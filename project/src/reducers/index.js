// setup initialState
const initialState = {
    players: [],
    isFetching: false,
    errors: ''
}

// setup an empty reducer
const playerReducer = (state = initialState, action) => {
    // setup switch, cases, and default
    switch(action.type){
        default:
            return state;

    }
}

// export the reducer
export default playerReducer;