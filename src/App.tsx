import React from 'react';
import { Container, Divider, Header, Icon, Segment } from 'semantic-ui-react';
import TaskList from './organisms/TaskList';
import TodoForm from './organisms/TodoForm';
import TodoSummary from './organisms/TodoSummary';

const App = (): React.ReactElement => {
  return (
    <Container textAlign='center'>
      <Segment compact>
        <Header as='h2' icon textAlign='center'>
          <Icon name='tasks' circular />
          <Header.Content>Todo App</Header.Content>
        </Header>
        <TodoForm />
        <TaskList />
        <TodoSummary />
      </Segment>
    </Container>
  )
}

export default App
