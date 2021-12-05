export const selectUser = (state) => state.user.data;
export const selectUserMail = (state) => state.user.data?.user?.email;
export const selectUserToken = (state) => state.user.data.token;
export const selectUserLogin = (state) => state.user.isLogin;
