import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardHeader, CardActions} from 'material-ui/Card';

class TodoItem extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title={this.props.content}/>
                <CardActions>
                    <FlatButton label="수정" onClick={()=>this.props.update(this.props.id)}/>
                    <FlatButton label="삭제" onClick={()=>this.props.delete(this.props.id)}/>
                </CardActions>
            </Card>
        );
    }
}

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