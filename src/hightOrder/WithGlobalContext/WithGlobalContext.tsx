import React, { useReducer } from 'react';
import { AppContextProvider } from '../../context/AppContext';
import { GlobalState, Action, Task } from '../../types/AppContext';

const initialState: GlobalState = {
    tasks: [],
    filter: 'all'
}

const reducer = (state: GlobalState, action: Action) => {
    const { type, payload } = action;

    console.log('reducer!!!', type, payload, state);
    switch(type){
        case 'ADD_TASK': 
            return { ...state, tasks: [...state.tasks, { task: payload, done: false } ] }
        case 'UPDATE_FILTER': 
            return { ...state, filter: payload }
        case 'UPDATE_TASK': 
            return { ...state, tasks: state.tasks.map((task: Task) => { 
                if (task.task === payload) {
                    task.done = true;
                }
                return task;
             }) }
    }

    return state;
}

const WithGlobalContext = ({ children }: any): React.ReactElement => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return <AppContextProvider value={{ state, dispatch }}>{children}</AppContextProvider>
}

export default WithGlobalContext;