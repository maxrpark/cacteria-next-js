const cart_reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default cart_reducer;
