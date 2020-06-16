import actionType from "./Types";
const PORT = process.env.PORT || 4000;

const API = `https://restcountries.eu/rest/v2/name/`;
const API_Q1 = `http://localhost:${PORT}/api`;
const API_Q2 = `http://localhost:${PORT}/api/countries`;
const API_Q3 = `https://restcountries.eu/rest/v2/all`;
const API_Q4 = `http://localhost:${PORT}/api/slotMachine`;
const getData = () => {
  return (dispatch) => {
    fetch(API_Q1)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionType.FETCH_DATA_Q1_SUCCESS, data });
      })
      .catch((error) => {
        dispatch({ type: actionType.FETCH_DATA_FAILED, error });
      });
  };
};
export const getCountry = (countryName) => {
  return (dispatch) => {
    fetch(`${API + countryName}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionType.FETCH_DATA_SUCCESS, data });
      })
      .catch((error) => {
        dispatch({ type: actionType.FETCH_DATA_FAILED, error });
      });
  };
};

export const getCommonCountries = () => {
  return (dispatch) => {
    fetch(API_Q2)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionType.FETCH_DATA_Q2_SUCCESS, data });
      });
  };
};

export const getAllCountries = () => {
  return (dispatch) => {
    fetch(API_Q3)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actionType.FETCH_DATA_Q3_SUCCESS,
          data,
        });
      })
      .catch((error) => {
        dispatch({ type: actionType.FETCH_DATA_FAILED, error });
      });
  };
};

export const getFilteredCountry = (name) => {
  return (dispatch) => {
    dispatch({ type: actionType.FETCH_FILTERED_COUNTRY, data: name });
  };
};
export const getSlotMachine = () => {
  return (dispatch) => {
    fetch(API_Q4)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionType.FETCH_SLOT_MACHINE, data });
      })
      .catch(error=>{
        dispatch({type:actionType.FETCH_DATA_FAILED,error})
      })
  };
};
export default getData;
