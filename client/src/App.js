import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Title from './Components/Title'
import getData from './Store/actionCreator'
import QuestionsAns from "./Components/QuestionsAns";
import InputForm from "./Components/InputForm";
import SlotMachine from "./Components/SlotMachine";


function App() {

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getData())
  },[])

  return (
    <div className="container">
    <Title title='Question One' center/>
    <InputForm/>
    <QuestionsAns/>
    <SlotMachine/>
    </div>
  );
}

export default App;
