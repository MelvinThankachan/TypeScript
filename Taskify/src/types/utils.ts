export type ReactSetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>

export type ToDoElement = {
    id: string;
    task: string;
    isDone: boolean;
}