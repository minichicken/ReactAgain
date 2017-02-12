import React from 'react';
import { AppBar } from 'material-ui';
import { connect } from 'react-redux';

class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <AppBar title={this.props.title} />
        );
    }
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
    return {
        title: state.title.title,
    };
};

export default connect(mapStateToProps)(Header);