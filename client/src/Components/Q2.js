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
    let strArrData = strArr.map((val,index) => <p key={index}>{val}</p>)
    let countriesData = countries.map((val, index) => <p key={index}>{val}</p>)
    return (
        <>
            <Title title='Q2' center />
            <Title title='Array Of Strings' center/>
          
            <div className="d-flex justify-content-between">
                {strArrData}
                </div>
            <Title title=' A list of countries where their name matches at least a part of one of these string' center />
            <div className="d-flex justify-content-between">
                {countriesData}
            </div>
        </>
    )
}
