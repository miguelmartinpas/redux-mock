import React from 'react';
import { GlobalStateProvider } from '../../types/AppContext';

const AppContext = React.createContext({} as GlobalStateProvider);

const { Provider: AppContextProvider } = AppContext;

export { AppContextProvider };

export default AppContext;