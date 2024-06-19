import style from "./Cards.module.css"
import { useCallback, useContext } from "react"
import { ContainerApi } from "../store/Storedb"
import Card from "../component/Card"
export default function Cards(){

    const {TaskList} =useContext(ContainerApi)
   
    return(
        <div className={style.Todolist}>
        {TaskList.map((task,index)=>(
          <Card key={index} Title={task.Title} Des={task.Des} Time={task.Time} Date={task.Date}  />
         ))}
    
       </div>
    )
}