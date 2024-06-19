import style from "./Form.module.css"
import { useRef } from "react"
import { useContext } from "react";
import { ContainerApi } from "../store/Storedb";
export default function Form({setFromOpen}){
  const {AddPost}= useContext(ContainerApi)
  let title = useRef();
  let description = useRef();
  let time = useRef();
  let dateOf = useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    let titleValue = title.current.value;
    let descriptionValue = description.current.value;
    let timeValue = time.current.value;
    let dateOfValue = dateOf.current.value;
    title.current.value="";
    description.current.value="";
    time.current.value="";
    dateOf.current.value="";
    setFromOpen(false)
    AddPost(titleValue,descriptionValue,dateOfValue,timeValue)
  }
    return(
        <div className={style.formSection}>
        <form onSubmit={handleSubmit} >
          <div className={style.inputBar}>
          <label htmlFor="Title">Title:</label>
    
          <input type="text" placeholder="Title of shedule" id="Title" ref={title} required />
          </div>
          <div className={style.inputBar}>
          <label htmlFor="Des">Description:</label>
          <textarea type="text"  placeholder="Why it is important" id="Des" ref={description} required />
          </div>
          <div className={style.inputBar}>
          <label htmlFor="Date">Date:</label>
          <input type="date" id="Date"  ref={time} required />
          </div>
          <div className={style.inputBar}>
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" ref={dateOf} required />
          </div>
          <button className={style.subBtn}>submit</button>
        </form>
       </div>
    )
}