import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSlotMachine } from '../Store/actionCreator';
import Title from './Title';

const SlotMachine=()=> {
    const dispatch=useDispatch();
    const result = useSelector(state => state.slotResult)
    useEffect(()=>{
        dispatch(getSlotMachine())
    })
  
    return (
        <>
        <Title title="Slot Machine Game" center/>
            <div className="mb-5 text-center text-capitalize text-primary">
                <p> 3 cherries in a row: won 50 coins </p>
                <p> 3 Apples in a row: won 20 coins </p>
                <p> 3 Bananas in a row: won 50 coins </p>
                <p> 3 lemons in a row: won 3 coins </p>
                <p> 2 cherries in a row: won 40 coins </p>
                <p> 2 Apples in a row: won 10 coins </p>
                <p> 2 Bananas in a row: won 5 coins </p>
            </div>
        <div className="my-5">
                <h3 className="my-5">
                    {result}
                </h3>
        </div>
            <button className="d-block mx-auto mb-5 btn btn-lg btn-danger" onClick={() => dispatch(getSlotMachine())}>Play Again</button>
        </>
    )
}
export default SlotMachine