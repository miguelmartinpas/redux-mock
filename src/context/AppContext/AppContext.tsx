import React from 'react';
import { GlobalContext } from '../../types/AppContext';

const AppContext = React.createContext({} as GlobalContext);

const { Provider: AppContextProvider } = AppContext;

export { AppContextProvider };

export default AppContext;