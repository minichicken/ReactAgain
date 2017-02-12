import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoApp from './Components/';
import reducers from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

injectTapEventPlugin();

const store = createStore(reducers);
const element = document.getElementById('root');
const App = () => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <TodoApp />
        </MuiThemeProvider>
    </Provider>
);

ReactDom.render(<App />, element);