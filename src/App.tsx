import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import WithGlobalContext from './hightOrder/WithGlobalContext';
import TaskList from './organisms/TaskList';
import TodoForm from './organisms/TodoForm';
import TodoHeader from './organisms/TodoHeader';
import TodoSummary from './organisms/TodoSummary';

const App = (): React.ReactElement => {
  return (
    <WithGlobalContext>
      <Container textAlign='center'>
        <Segment compact>
          <TodoHeader />
          <TodoForm />
          <TaskList />
          <TodoSummary />
        </Segment>
      </Container>
    </WithGlobalContext>
  )
}

export default App;
