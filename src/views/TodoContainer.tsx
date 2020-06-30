import * as React from "react";
import {ListItemModel} from "../models/ListItemModel";
import {ListItem} from "./ListItem";
import '../styles/TodoStyles.scss'
import {observer} from "mobx-react";
import TodoStore from '../store/TodoStore'

function TodoContainer(props: any) {


   const {TasksContext} = TodoStore;

    const clear = (e: any) =>{
        e.target.value = "";
    }

    const deleteHandler = (id: number)=>{

        const searchId: number = TasksContext.findIndex(x=>x.id ===id);
        console.log(searchId);
        TasksContext.splice(searchId,1);
    }

    const EnterPressHandler =(e: any)=>{

        if(e.charCode ===13){

            const listItem: ListItemModel = {
                id:TasksContext.length,
                title:e.target.value,
                status:true,
                deleteHandler:deleteHandler
            };

            TasksContext.push(listItem);

            clear(e);
        }



    }




    return(

    <div className={""}>
        <h1 className={'todoHeader'}>Active tasks:{TasksContext.length}</h1>


        <div className={"todoContainerSize centralPosition todoContainer"}>
            <input className={'mt-20'} onKeyPress={(e)=>EnterPressHandler(e)}/>
            {TasksContext.map((item: ListItemModel)=>{
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                return <ListItem className={"todoItemContainer"} id={item.id} title={item.title} status={item.status} deleteHandler={deleteHandler} />
            })}

        </div>
    </div>)

}

export default observer(TodoContainer);
