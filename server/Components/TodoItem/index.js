import React from 'react';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader title={this.props.content} />
                    <CardActions>
                        <FlatButton label="삭제" onClick={()=> this.props.delete(this.props.id)} />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

TodoItem.propsTypes = {
    content: React.PropTypes.string,
    delete: React.PropTypes.func,
}

export default TodoItem;