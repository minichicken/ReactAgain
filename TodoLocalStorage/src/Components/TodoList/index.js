import React from 'react';
import Update from 'react-addons-update';

import TodoItem from '../TodoItem';
import TodoWrite from '../TodoWrite';

import styles from './todoList.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.state = {
            todoList: todos,
        };
        this.createItem = this.createItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    createItem(todo) {
        this.setState({
            todoList: Update(this.state.todoList, { $push: [{ content: todo }] })
        });
    }

    deleteItem(index) {
        this.setState({
            todoList: Update(this.state.todoList, { $splice: [[index, 1]] })
        });
    }

    render() {
        return (
            <div >
                {this.state.todoList.map((todo, index) => {
                    return (
                        <TodoItem className={styles.todoList} key={index} content={todo.content} id={index} delete={this.deleteItem} />
                    );
                })}
                <TodoWrite create={this.createItem} />
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('todos', JSON.stringify(this.state.todoList));
    }
}

export default TodoList;