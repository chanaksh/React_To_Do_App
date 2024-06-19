import style from "./ErrorMsg.module.css"
import { useContext } from "react";
import { ContainerApi } from "../store/Storedb";
export default function ErrorMsg(){
    let {TaskList} = useContext(ContainerApi)
     
    return(
        <>
      {TaskList.length == 0  && <h2 className={style.error}>Enjoy your day you have no taks today </h2>}  
      </> 
    )
}