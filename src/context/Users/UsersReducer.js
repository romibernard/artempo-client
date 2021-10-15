const reducer = (globalState, action) => {

    switch (action.type) {
        case "GET_USER":
            return {
                ...globalState,
                authStatus: true,
                user: action.payload
            }
        case "LOGIN_OK":
        case "CREATE_USER_OK":
            localStorage.setItem("token", action.payload)
            return {
                ...globalState,
                authStatus: true
            }
        case "LOGOUT":
            localStorage.removeItem("token")
            return {
                ...globalState,
                user: null,
                authStatus: null
            }
        default:
            return globalState
    }
}

export default reducer