export interface Task {
    task: string;
    done: boolean;
}

export interface GlobalContext {
    tasks: Task[];
    filter: string;
}