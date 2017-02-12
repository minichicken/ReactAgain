import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}

App.propsTYpes = {
    children: React.PropTypes.object.isRequired,
}

export default connect()(App);