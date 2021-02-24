import { createContext, useReducer, useEffect } from 'react'
import reducers from './Reducers'
import { getData } from '../utils/fetchData'

//Create a context to show an aleart for notify or auth
export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const initialState = { notify: {}, auth: {} }
    const [state, dispatch] = useReducer(reducers,initialState)

    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin");
        if(firstLogin){
            getData('auth/accessToken').then(res => {
                if(res.err) return localStorage.removeItem("firstLogin")
                dispatch({
                    type: "AUTH",
                    payload: {
                        token: res.accesss_token,
                        user: res.user
                    }
                })
            })
        }
    },[])

    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}