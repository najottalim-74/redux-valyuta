let initialState = [{ id: 1, kurs: ["Dollor", 10] }];

const valyutaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      state = [...state, action.payload];
      break;
    case "remove":
      state = [...state, action.payload];
      break;
    default:
      return state;
  }
  return state;
};
export default valyutaReducer;
