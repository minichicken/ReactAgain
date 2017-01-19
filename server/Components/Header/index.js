import React from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <AppBar title={this.props.title} />
            </div>
        );
    }
}

Header.propsTypes = {
    title: React.PropTypes.string.isRequired,
}

export default Header;