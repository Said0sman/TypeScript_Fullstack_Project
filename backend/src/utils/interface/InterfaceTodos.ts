//Global object with interface
export interface TodoDataObject {
    id: string;
    username: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateTodoObject{
    username: string;
    password: string;
}