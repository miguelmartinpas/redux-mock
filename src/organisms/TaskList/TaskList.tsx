import React, { useContext, useState } from 'react'
import { List, Icon, Container } from 'semantic-ui-react';
import AppContext from '../../context/AppContext';
import { GlobalContext, Task } from '../../types/AppContext';

const TaskList = (): React.ReactElement => {
    const { tasks = [] } = useContext<GlobalContext>(AppContext);

    console.log('TasksList', tasks);

    if (!tasks.length) {
        return (    
            <List divided>
                <List.Item>Empty!</List.Item>
            </List>
        );
    }

    return (
        <Container textAlign="left">
            <List divided verticalAlign='middle'>
                {tasks.map(({ task, done }: Task, index: number) => { 
                    return (
                        <List.Item key={task} floated="left">
                            <Icon name={done? "check square outline" :  "square outline"} size="big" />
                            <List.Content>{ done ? <del>{task}</del> : task }</List.Content>
                        </List.Item>
                    )
                })}
            </List>
        </Container>
    );
}

export default TaskList;
