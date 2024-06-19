import style from "./Card.module.css"
import { MdRemoveCircleOutline } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { useState,useContext } from "react";
import { ContainerApi } from "../store/Storedb";
export default function Card({Title, Des, Time,Date}){
     const {DeletePost} = useContext(ContainerApi)
    const [check,setCheck] = useState(false)
    const handleClick=()=>{
    setCheck(!check);
    }

    const handleDeleteClick=()=>{
       
        DeletePost(Title)
    }
    return(
        <div className={style.item}>
        <h2>{Title}</h2>
        <p>{Des}</p>
        <div className={style.dateInfo}>
          <span className={style.date}>{Date}</span>
          <span className={style.time}>{Time}</span>
        </div>
        <div className={style.btns}>
          
          <button id={style.green} className={style.btn} onClick={handleClick}>
            {
                check ? <FaRegCheckCircle className={style.add} /> : <FaCircleCheck  className={style.add}/>
            }
          </button>
          <button id={style.red} className={style.btn}><MdRemoveCircleOutline className={style.remove} onClick={handleDeleteClick} /></button>
        
        </div>
      </div>
    )
}