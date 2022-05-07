import React, { useState } from 'react'
import { Button, List, Image, ItemDescription, Icon } from 'semantic-ui-react';

const TaskList = (): React.ReactElement => /* return <div>TaskList</div>*/ {
    const [items, setItems] = useState([1,2,3]);

    if (!items.length) {
        return (    
            <List divided verticalAlign='middle'>
                <List.Item>Empty!</List.Item>
            </List>
        );
    }

    return (
        <List divided verticalAlign='middle'>
            {items.map((item, index: number) => { 
                return (
                    <List.Item key={item}>
                        <Icon name="square outline" size="big" />
                        <List.Content>Lena</List.Content>
                    </List.Item>
                )
            })}
        </List>
    );
}

export default TaskList;
