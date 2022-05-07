import React, { useState } from 'react'
import {
    Form,
    FormInputProps,
    FormSelectProps,
    Input,
    Select,
  } from 'semantic-ui-react'

const TodoForm = (): React.ReactElement => {
    const [filter, setFilter] = useState<string>('all');
    const [task, setTask] = useState<string>('');

    const handleOnSubmit = (): void => {
        console.log('Add new task', task);
    }

    const handleFilter = (filter: string): void => {
        console.log('Apply filter', filter);
        setFilter(filter)
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Group widths={2}>
                <Form.Field
                    width={12}
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
