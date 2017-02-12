import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import TodoList from '../TodoList';
import TodoWrite from '../TodoWrite';

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Header />
                <TodoList/>
                <TodoWrite />
            </div>
        );
    }
}

export default connect()(TodoContainer);