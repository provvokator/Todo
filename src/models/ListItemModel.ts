export interface ListItemModel {
    id: number;
    title: string;
    status: boolean;
    deleteHandler(id: number): void;
}

