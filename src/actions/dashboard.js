import { callAPI } from '../wrappers/APIWrapper';

export const getMovieByTitle = (title) => {
    return (dispatch) => {
        dispatch(setMovieLoader(true));
        return callAPI('get', `/movies/getSingleMovie/${title}`, null).then(movieData => {
            console.log("testData" , movieData)
            dispatch(setSingleMovie(movieData));
            dispatch(setMovieLoader(false));
        })
            .catch(error => {
                if (error.message === "Movie does not exist!") {
                    dispatch(setSingleMovie({ title: error.message }));
                    dispatch(setMovieLoader(false));
                }
            })
    }
};

export const setSingleMovie = (movieData) => ({
    type: 'SET_SINGLE_MOVIE',
    movieData
})

export const setMovieLoader = (movieLoader) => ({
    type: 'SET_MOVIE_LOADER',
    movieLoader
})