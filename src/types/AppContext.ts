import { Dispatch, ReducerState } from "react";

export interface Task {
    task: string;
    done: boolean;
}

export interface GlobalState {
    tasks: Task[];
    filter: string;
}

export interface Action {
    type: string;
    payload: string;
}

export interface GlobalStateProvider{
    state: GlobalState;
    dispatch: Dispatch<Action>;
}
