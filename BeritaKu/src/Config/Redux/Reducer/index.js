const initialState = {
  registerForm: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORM_REGISTER':
      return {
        ...state,
        registerForm: action.value,
      };
  }
  return state;
};

export default reducer;
