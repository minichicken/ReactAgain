import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardActions } from 'material-ui/Card';

function TodoItem(props) {
    return (
        <Card>
            <CardHeader title={props.content} />
            <CardActions>
                <FlatButton label="수정" onClick={() => props.update(props.id)} />
                <FlatButton label="삭제" onClick={() => props.delete(props.id)} />
            </CardActions>
        </Card>
    );
};

TodoItem.propsTypes = {
    content: React.PropTypes.string.isRequired,
    update: React.PropTypes.func.isRequired,
    delete: React.PropTypes.func.isRequired,
}

TodoItem.defaultProps = {
    id: -1,
    content: '',
    delete: () => console.error('delete is undefined'),
}

export default TodoItem;