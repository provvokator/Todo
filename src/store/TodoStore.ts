import {decorate, observable,action} from "mobx";
import {ListItemModel} from "../models/ListItemModel";
//import {createContext} from "react";

 class TodoStore {
TasksContext: ListItemModel[] = []

DeleteItem(id: number): void{
  this.TasksContext.splice(id,1);

}

}

decorate(TodoStore,{
 TasksContext:observable,
 DeleteItem:action
})

export default new TodoStore();


