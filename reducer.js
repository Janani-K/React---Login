const reducer = (prevState = {
    loginStatus : false,
    logoutStatus : true
}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({},action)
        case 'LOGOUT':
            return Object.assign({},action)
        default:
            return prevState
    }
}

export default reducer