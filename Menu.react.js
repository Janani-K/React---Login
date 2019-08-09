import React from 'react';
import {connect} from 'react-redux'


class Menu extends React.Component {
    render() {
        return (
            <div >
                <button disabled={this.props.loginStatus}>Login</button>
                <button disabled={this.props.logoutStatus}>Logout</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.loginStatus,
        logoutStatus: state.logoutStatus
    }
}

export default connect(mapStateToProps)(Menu)