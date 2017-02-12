import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import TodoWrite from './TodoWrite';

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <Header title="TodoList with Redux"/>
                <TodoList/>
                <TodoWrite/>
            </div>
        );
    }
}

export default TodoApp;