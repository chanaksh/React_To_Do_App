import Heading from "./component/Heading"
import { IoMdAddCircle } from "react-icons/io";
import Cards from "./component/Cards";
import Form from "./component/Form"
import { useState } from "react";
import Container from "./store/Storedb";
import ErrorMsg from "./component/ErrorMsg";

import './App.css'

function App() {
  let [FormOpen , setFromOpen] = useState(false);
  
  const handelClick =()=>{
    setFromOpen(!FormOpen);
  }
  return (
   <Container>
   <Heading/>
   <Cards/>
   {FormOpen && <Form setFromOpen={setFromOpen}/> }
   <ErrorMsg/>
   
    <div className="addBtn " onClick={handelClick}><button><IoMdAddCircle /></button></div>
    </Container> 
  )
}

export default App