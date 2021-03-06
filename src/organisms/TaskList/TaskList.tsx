import React, { useContext, useState } from 'react'
import { List, Icon, Container } from 'semantic-ui-react';
import AppContext from '../../context/AppContext';
import useDispatch from '../../hooks/useDispatch';
import { GlobalStateProvider, Task } from '../../types/AppContext';

const TaskList = (): React.ReactElement => {
    const { dispatch } = useDispatch();
    const { state } = useContext<GlobalStateProvider>(AppContext);
    const { tasks = [], filter } = state;

    console.log('TasksList', tasks);

    if (!tasks.length) {
        return (    
            <List divided>
                <List.Item>Empty!</List.Item>
            </List>
        );
    }

    const taskWithFilters = (currentTasks: Task[]): Task[] =>{

        if (filter === 'done') {
            currentTasks = currentTasks.filter(({ done }: Task) => done);
        }

        if (filter === 'pending') {
            currentTasks = currentTasks.filter(({ done }: Task) => !done);
        }

        return currentTasks;

    }

    const handleOnClikItem = (task: string) => {
        dispatch({
            type: 'UPDATE_TASK',
            payload: task
        })
    }

    return (
        <Container textAlign="left">
            <List divided verticalAlign='middle'>
                {taskWithFilters(tasks).map(({ task, done }: Task, index: number) => { 
                    return (
                        <List.Item key={`${task}-${index}`} floated="left">
                            <Icon name={done? "check square outline" :  "square outline"} size="big"  onClick={() => handleOnClikItem(task)}/>
                            <List.Content>{ done ? <del>{task}</del> : task }</List.Content>
                        </List.Item>
                    )
                })}
            </List>
        </Container>
    );
}

export default TaskList;
