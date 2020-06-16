import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, getFilteredCountry } from "../Store/actionCreator";
import Title from "./Title";

import InputField from "./InputField";

export default function Q3() {
  const dispatch = useDispatch();

  let countryName = useSelector((state) => state.filteredCountry);
  useEffect(() => {
    dispatch(getAllCountries());
  },);
  let data = useSelector((state) => state.allCountries);

  let filteredCountry = data.filter(
    (val) => val.name.toLowerCase() === countryName
  )
   

  let renderData = data.map((val, index) => {
    return (
      <tr key={index} onClick={() => dispatch(getFilteredCountry(val.name))}>
        <td>{val.name}</td>
        <td>{val.capital}</td>
        <td>{val.region}</td>
        <td>{val.nativeName}</td>
      </tr>
    );
  });
  return (
    <>
      <Title title="Q3" center />
      <InputField />
      <table className="table table-hover text-center">
        <thead>
          <tr>
            <th scope="col">Country Name</th>
            <th scope="col">Capital</th>
            <th scope="col">Region</th>
            <th scope="col">Native Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountry.length === 0 ? (
            renderData
          ) : (
            <tr>
              <td>{filteredCountry[0].name}</td>
              <td>{filteredCountry[0].capital}</td>
              <td>{filteredCountry[0].region}</td>
              <td>{filteredCountry[0].nativeName}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
