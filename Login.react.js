import React from 'react';
import {connect} from 'react-redux'
import {login} from '../store'


class Login extends React.Component {
    render() {
        return (
            <div >
                <button onClick={this.props.login}>LOGIN</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            dispatch(login)
        }
    }
}

export default connect(null,mapDispatchToProps)(Login)