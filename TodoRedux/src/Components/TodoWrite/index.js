import React from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import styles from './todoWrite.css';

import * as action from '../../action';

class TodoWrite extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todo: '' };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    }
    render() {
        return (
            <Paper rounded={false} className={styles.todoWrite}>
                <TextField hintText="오늘 할일" fullWidth={true} onKeyDown={this.handleOnKeyDown} value={this.state.todo} onChange={this.handleOnChange} />
            </Paper>
        );
    }

    handleOnChange(event) {
        let newSate = {};
        newSate['todo'] = event.target.value;
        this.setState(newSate);
    }

    handleOnKeyDown(event) {
        if (event.key === 'Enter') {
            if (this.state.todo !== '') {
                this.setState({ todo: '' });
                this.props.handleProduce(event.target.value);
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispach) => {
    return {
        handleProduce: (todo) => { dispach(action.produce(todo)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoWrite);