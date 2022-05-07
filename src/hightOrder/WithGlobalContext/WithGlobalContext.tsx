import React from 'react';
import { AppContextProvider } from '../../context/AppContext';

const WithGlobalContext = ({ children }: any): React.ReactElement => {
    const initValue = {
        tasks: [
            {
                task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                done: false,
            },
            {
                task: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
                done: true,
            },
            {
                task: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur',
                done: false,
            }
        ],
        filter: 'all'
    }
    return <AppContextProvider value={initValue}>{children}</AppContextProvider>
}

export default WithGlobalContext;