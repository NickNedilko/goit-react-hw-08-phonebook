export const selectAuthToken = state => state.auth.access_token;
export const selectAuthIsLoading = state=> state.auth.isLoading;
export const selectUserName = state=>state.auth.user.name;