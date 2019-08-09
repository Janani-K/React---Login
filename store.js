import reducer from './reducer'
import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'    

export const login = {
    type: "LOGIN",
    loginStatus : true,
    logoutStatus : false
}

const store = createStore(reducer, composeWithDevTools());

export default store