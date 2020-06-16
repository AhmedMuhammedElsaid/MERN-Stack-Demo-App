import React from "react";
import { useSelector } from "react-redux";

export default function Q1() {
  let countryData = useSelector((state) => state.data);
 
  countryData=countryData[0]
   
  let flag = countryData?countryData.flag:null;
  let data =countryData?(<> 
    <p className="card-text" key='1'>
      Country Name: {countryData.name} <br />
        Native Name : {countryData.nativeName} <br />
        Native Name : {countryData.region} <br />
        Population : {countryData.population}
    </p>
  </>) : null

  return (
    <>
      {countryData ? (<div className=" justify-content-md-center row">
        <div className=" mt-2 text-center col-lg-4 col-sm-2">
          {data}
        </div>
        <div className="col col-lg-4 col-sm-4">
          <div className="card " style={{ backgroundColor: 'transparent' }}>
            <img className='card-img-overlay img-fluid' src={flag} />
          </div>
        </div>
      </div>) : <h2 className="text-center text-danger">Please Enter A Valid Country Name</h2>
  }
    </>
  );
}
