import { createContext, useReducer } from "react";

export const EntryContext = createContext();

// manage the state of the entries globally
// works like array.reduce
// accumulates value over time but sends one
export const entryReducer = (state, action) => {
    switch(action.type){
        // return post as new state - returns wahtever the action's payload is
        case 'SET_ENTRY':
            return {
                entries: action.payload
            }
        // return new state, cant mutate
        case 'CREATE_ENTRY':
            return {
                entries: [action.payload, ...state.entries]
            }
        // take post, filter by id - delete
        case 'DELETE_ENTRY':
            return {
                entries : state.entries.filter(entry => entry._id !== action.payload._id)
            }
        // default state
        default:
            return state
    }
}

export const EntryContextProvider = ({children}) => {
    // dispatch - dispatch actions to affect state in context
    const [state, dispatch] = useReducer(entryReducer, { 
        entries : null
    })

    return (
        <EntryContext.Provider value={{...state, dispatch}}>
            {children}
        </EntryContext.Provider>
    )
}