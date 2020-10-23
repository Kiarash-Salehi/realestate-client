const initialState = {
  showLoader: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOWLOADER':
      return {
        showLoader: true
      };
    case 'HIDELOADER':
      return {
        showLoader: false
      };
    default:
      return state;
  }
};