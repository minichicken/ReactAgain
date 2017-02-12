import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import * as action from '../../redux/action';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.todos.map((todo, index) => {
                    return (
                        <TodoItem key={index} id={index} content={todo.content} delete={this.props.handleRemoval} />
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleRemoval: (id) => { dispatch(action.removal(id)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);