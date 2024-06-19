import { createContext,useReducer } from "react";

export const ContainerApi = createContext({
    TaskList: [],
    AddPost:()=>{},
    DeletePost : ()=>{}
}); 
const reducer=(curr,action)=>{
   let newValue = curr;
   if(action.type=="add"){
    
    newValue = [action.payload,...curr];
   }
   else if(action.type=="delete"){
     
       newValue=curr.filter((item)=>{
        return item.Title!=action.payload.title;
       })
   }
return newValue;
}
function Container ({children}){

  const defaultList = [
    {
        Title : "taking break first",
        Des:"I always have a soft and healthy breakfast, and I also like to include something sweet.",
        Date:"12/02/2023",
        Time : "8.23 AM"
    },
    {
        Title : "playing cricket",
        Des:"I enjoy playing cricket, especially gully cricket; it's a hobby of mine, and I typically spend up to two hours playing.",
        Date:"12/02/2023",
        Time : "10.23 AM"
    },
    {
        Title : "completing homework",
        Des:"As part of my homework, I am practicing coding, focusing mainly on Java and C++. These are my favorite programming languages.",
        Date:"12/02/2023",
        Time : "12.23 AM"
    }
  ]
   const [TaskList,PostListDispatch] = useReducer(reducer,defaultList);
   const AddPost=(titleValue,descriptionValue,timeValue,dateOfValue)=>{
    const obj = {
        type:"add",
        payload:{
            Title:titleValue,
            Des:descriptionValue,
            Time:timeValue,
            Date:dateOfValue
        }
    }
    
    PostListDispatch(obj);
   }
   const DeletePost=(Title)=>{

    const obj = {
        type:"delete",
        payload:{
            title:Title
        }
    }
    
    PostListDispatch(obj);
   }
    return(
        <ContainerApi.Provider value={{TaskList,AddPost,DeletePost}}>
        {children}
        </ContainerApi.Provider>
    )
} 

export default Container





