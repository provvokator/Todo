import * as React from 'react';
import {ListItemModel} from "../models/ListItemModel";
import '../styles/TodoStyles.scss';

export const ListItem: (props: ListItemModel) => any = (props: ListItemModel) => {

    return (
        <div className={"todoItemContainer"}>
            <h1>{props.id} </h1>
            <p className={"todoItemTextBlock"}>{props.title} </p>
            <button onClick={()=>props.deleteHandler(props.id)} className={"btn btn-danger button-height"}>Remove</button>
        </div>
    );
};
