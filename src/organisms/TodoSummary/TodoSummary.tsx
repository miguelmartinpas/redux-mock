import React, { useContext } from 'react';
import { Container } from 'semantic-ui-react';
import AppContext from '../../context/AppContext';
import { GlobalStateProvider, Task } from '../../types/AppContext';

const TodoSummary = (): React.ReactElement => {
    const { state } = useContext<GlobalStateProvider>(AppContext);
    const { tasks = [] } = state;
    
    console.log('TodoSummary', tasks);

    const totalTaskPending = tasks.filter((task: Task) => !task.done);
    
    return <Container textAlign='right'>{totalTaskPending.length} task pending</Container>
}

export default TodoSummary;
