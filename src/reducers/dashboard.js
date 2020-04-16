const dashboardDefaultState = [{
    movieLoader: true
}];

export default (state = dashboardDefaultState, action) => {
    switch (action.type) {
        case 'SET_SINGLE_MOVIE':
            return {
                ...state,
                movieData: action.movieData
            };
        case 'SINGLE_LOAD':
            return {
                ...state,
                movieLoader: action.movieLoader
            };
        default:
            return state;
    }
}; 