import { ToDo } from 'src/models/note.model';

export interface ToDoState {
    toDos: ToDo[];
    isloading: boolean;
    error: string;
}