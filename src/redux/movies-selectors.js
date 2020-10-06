export const getMovies = (state) => {
    return state.moviesPage.movies
}
export const getPageSize = (state) => {
    return state.moviesPage.pageSize
}
export const getTotalMoviesCount = (state) => {
    return state.moviesPage.totalMoviesCount
}
export const getCurrentPage = (state) => {
    return state.moviesPage.currentPage
}
export const getIsFetching = (state) => {
    return state.moviesPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.moviesPage.followingInProgress
}
