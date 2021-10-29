import React, { useContext, useState, createContext } from "react"

const AppContext = createContext({
    token : null,
    isLoggedIn : false,
    login: (token)=> {},
    logout: () => {}
})

const AppContextProvider = (props) => {

    const [token, setToken] = useState(null)

    const loginHandler = (token) => {
        setToken(token)
    }

    const logoutHandler = () => {
        setToken(null)
    }

    const context = {
        token : token,
        isLoggedIn: !!token,
        login : loginHandler,
        logout: logoutHandler
    }

    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext}
export default AppContextProvider
