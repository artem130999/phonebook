export const getUserName = state => state.auth.user.name;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getIsFetchingCurrentUser = state =>
    state.auth.isFetchingCurrentUser;
