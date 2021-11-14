export interface TodoDataObject {
    id: string;
    text: string;
    day: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateTodoObject{
    text: string;
    day: string;
}