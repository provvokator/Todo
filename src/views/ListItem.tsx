import * as React from 'react';
import {ListItemModel} from "../models/ListItemModel";

export const ListItem: (props: ListItemModel) => any = (props:ListItemModel) => {

    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
};
