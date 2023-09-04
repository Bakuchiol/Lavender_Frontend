import { useAuthContext } from "./useAuthContext"
import { useEntryContext } from "./useEntryContext"

export const useLogout = () => {
    const { dispatch: dispatchUser } = useAuthContext()
    const { dispatch: dispatchEntries } = useEntryContext()

    const logout = () => {
        localStorage.removeItem('user')
        dispatchUser({ type: 'LOGOUT' })
        dispatchEntries({ type: 'SET_ENTRY', payload: null })
    }
    return { logout }
}