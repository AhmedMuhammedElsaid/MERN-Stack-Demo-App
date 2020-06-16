import actionType from "./Types";

let initialState = {
  data: [],
  countries: [],
  strArr: [],
  allCountries: [],
  filteredCountry:{},
  slotResult:'',
  error: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_DATA_Q1_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case actionType.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case actionType.FETCH_DATA_Q2_SUCCESS:
      return {
        ...state,
        countries: action.data.data,
        strArr: action.data.strArr
      };
    case actionType.FETCH_DATA_Q3_SUCCESS:
        return {
        ...state,
        allCountries: action.data
      };
      
    case actionType.FETCH_FILTERED_COUNTRY:
      return {
        ...state,
        filteredCountry: action.data
      };
    case actionType.FETCH_SLOT_MACHINE:
      return {
        ...state,
        slotResult: action.data
      };
    case actionType.FETCH_DATA_FAILED:
      return {
        ...state,
        error: action.message,
      };
    default:
      return state;
  }
};
export default rootReducer;
