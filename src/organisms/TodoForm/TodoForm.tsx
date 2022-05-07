import React, { useContext, useState } from 'react'
import {
    Form,
    FormInputProps,
    FormSelectProps,
    Input,
    Select,
  } from 'semantic-ui-react'
import AppContext from '../../context/AppContext';
  import useDispatch from '../../hooks/useDispatch';
import { GlobalStateProvider } from '../../types/AppContext';

const TodoForm = (): React.ReactElement => {
    const { state } = useContext<GlobalStateProvider>(AppContext);
    const { dispatch } = useDispatch();
    const { filter } = state;
    const [task, setTask] = useState<string>('');

    console.log('TodoForm');

    const handleOnSubmit = (): void => {
        console.log('Add new task', task);
        dispatch({
            type: 'ADD_TASK',
            payload: task
        });
        setTask('');
    }

    const handleFilter = (filter: string): void => {
        dispatch({
            type: 'UPDATE_FILTER',
            payload: filter
        });
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group widths={2}>
                <Form.Field
                    width={12}
                    value={task}
                    control={Input}
                    label=''
                    placeholder=''
                    onChange={(event: React.MouseEvent<HTMLButtonElement>, data: FormInputProps) => setTask(data.value as string)}
                />
                <Form.Field
                    width={4}
                    control={Select}
                    value={filter}
                    onChange={(event: React.MouseEvent<HTMLButtonElement>, data: FormSelectProps) => handleFilter(data.value as string)}
                    label=''
                    options={[{key: 'a', value: 'all', text: 'All'}, {key: 'd', value: 'done', text: 'Done'}, {key: 'p', value: 'pending', text: "Pending"}]}
                    placeholder='Select one'
                />
            </Form.Group>
        </Form>
    );
}

export default TodoForm;
