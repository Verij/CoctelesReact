export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGIN_OUT';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';


export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const signupUser = (credentials, navigate, setFieldError, setSubmitting) => {

}

export const logOutUser = () => ({
  type: LOGOUT_USER,
})
