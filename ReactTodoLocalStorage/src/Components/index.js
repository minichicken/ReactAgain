import React from 'react';

import style from './compoents.css';

import Header from './Header';
import TodoList from './TodoList';

class TodoApp extends React.Component {
    render() {
        return (
            <div className={style.all}>
                <Header title="TodoList" />
                <TodoList />
            </div>
        );
    }
}

export default TodoApp;