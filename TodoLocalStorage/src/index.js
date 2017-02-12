import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TodoApp from './Components/';

injectTapEventPlugin();

const element = document.getElementById('root');
const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <TodoApp />
    </MuiThemeProvider>
);

ReactDom.render(<App />, element);