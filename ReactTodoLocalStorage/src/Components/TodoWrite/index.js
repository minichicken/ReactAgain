import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import styles from './todoWrite.css';

class TodoWrite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
        this.style = {
            paddingLeft: 10,
            paddingRight: 10,
        };

        this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    test() {
        this.setState((prev) => ({
            toggle: !prev.toggle
        }));
    }

    handleOnChange(e) {
        let newState = {};
        newState['todo'] = e.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <Paper style={this.style} rounded={false} className={styles.todoItem}>
                <TextField hintText="오늘 할 일" fullWidth={true} onKeyDown={this.handleOnKeyDown} value={this.state.todo} onChange={this.handleOnChange} />
            </Paper>
        );
    }

    handleOnKeyDown(event) {
        if (event.key == 'Enter') {
            if (this.state.todo !== '') {
                this.props.create(this.state.todo)
                this.setState({ todo: '' });
            }
        }
    }
}

export default TodoWrite;