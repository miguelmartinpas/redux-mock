import React, { useReducer } from 'react';
import { AppContextProvider } from '../../context/AppContext';
import { GlobalState, Action } from '../../types/AppContext';

const initialState = {
    tasks: [],
    filter: 'a'
}

const reducer = (state: GlobalState, action: Action) => {
    return state;
}

const WithGlobalContext = ({ children }: any): React.ReactElement => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return <AppContextProvider value={{ state, dispatch }}>{children}</AppContextProvider>
}

export default WithGlobalContext;