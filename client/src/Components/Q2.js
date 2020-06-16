import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCommonCountries } from '../Store/actionCreator';
import Title from './Title';

export default function Q2() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCommonCountries())
    },[])
    const countries = useSelector(state => state.countries)
    const strArr = useSelector(state => state.strArr)
    let strArrData = strArr.map((val, index) => <span style={{ fontSize: "1.5rem" }} className="d-inline-block m-5 text-white" key={index}>{val}</span>)
    let countriesData = countries.map((val, index) => <span style={{ fontSize: "1.5rem" }} className="d-inline-block m-5 text-white"  key={index}>{val}</span>)
    return (
        <div className="d-flex   justify-content-center  flex-column">
       
            
            <div style={{ marginTop: "16rem" }} className="d-inline-block">
                <Title title='Q2' center />
                <Title title='Array Of Strings' center />
                </div>
                <div >
                {strArrData}
               
            
                <Title title=' A list of countries where their name matches at least a part of one of these string' center />
               
                 {countriesData}
       
        </div>
        </div>
    )
}
