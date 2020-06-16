import React from 'react'
import { useSelector } from "react-redux";
import Spinner from 'react-bootstrap/Spinner'
import Q1 from './Q1'
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';

export default function QuestionsAns() {
    let data = useSelector((state) => state.data);
  
    return (
        <div className=' text-center'>
            {data.length == 0 ? <Spinner animation="border" />
            : 
            <>
            <Q1 />
            <Q2/>
            <Q3/>
            <Q4/>
            </>
            }
        </div>
    )
}
