import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const TodoHeader = (): React.ReactElement => {
    console.log('Header');

    return (
        <Header as='h2' icon textAlign='center'>
            <Icon name='tasks' circular />
            <Header.Content>Todo App</Header.Content>
        </Header>
    );
}

export default TodoHeader;
