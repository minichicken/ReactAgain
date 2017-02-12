import React from 'react';
import {AppBar} from 'material-ui';

class Header extends React.Component {
    render() {
        return (
            <AppBar title={this.props.title}/>
        );
    }
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
}

export default Header;