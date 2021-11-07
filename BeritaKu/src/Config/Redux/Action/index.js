export const SetFormRegister = data => {
  return dispatch => {
    return dispatch({
      type: 'SET_FORM_REGISTER',
      value: data,
    });
  };
};
