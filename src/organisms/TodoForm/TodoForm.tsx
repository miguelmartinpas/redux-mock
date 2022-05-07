import React, { useState } from 'react'
import {
    Checkbox,
    Form,
    FormSelectProps,
    Input,
    Radio,
    Select,
    TextArea,
  } from 'semantic-ui-react'

const TodoForm = (): React.ReactElement => {
    const [filter, setFilter] = useState<string>('all');

    return (
        <Form>
            <Form.Group widths='equal'>
            <Form.Field
                control={Input}
                label='Task'
                placeholder=''
            />
            <Form.Field
                control={Select}
                value={filter}
                onChange={(event: React.MouseEvent<HTMLButtonElement>, item: FormSelectProps) => setFilter(item.value as string)}
                label='Task filter'
                options={[{key: 'a', value: 'all', text: 'All'}, {key: 'd', value: 'done', text: 'Done'}, {key: 'p', value: 'pending', text: "Pending"}]}
                placeholder='Select one'
            />
            </Form.Group>
        </Form>
    );
}

export default TodoForm;
