import * as React from "react";
import {useState} from "react";
import {ListItemModel} from "../models/ListItemModel";
import {ListItem} from "./ListItem";

function TodoContainer(props:any) {

    const [tasks, addTask] = useState<ListItemModel[]>([]);

    const EnterPressHandler =(e:any)=>{

        if(e.charCode ===13){
            let listItem:ListItemModel = {
                id:tasks.length,
                title:"123",
                status:true,
            };


            listItem.id = tasks.length;
            listItem.title = e.target.value;
            listItem.status = false;
            addTask(oldArray => [...oldArray, listItem]);
            clear(e);
        }



    }

    const clear = (e:any) =>{
        e.target.value = "";
    }

    return(

    <div>
        <h1>Active tasks:{tasks.length}</h1>
        <input onKeyPress={(e)=>EnterPressHandler(e)}/>
        {tasks.map((item:ListItemModel)=>{
            return <ListItem id={item.id} title={item.title} status={item.status}/>
        })}
    </div>)

}

export default TodoContainer;
