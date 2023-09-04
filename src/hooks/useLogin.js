import { useState } from "react";
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const{dispatch} = useAuthContext()

    const login = async(email, password) => {
        try {
            setLoading(true)
            const response = await fetch('http://localhost:4000/api/journal/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })    

            const json = await response.json()

            if(!response.ok){
                setLoading(false)
                setError(json.error)
            }
            // store in local storage
            if(!response.ok){
                localStorage.setItem('user', JSON.stringify(json))
                dispatch({type: 'LOGIN', payload: json})
                setLoading(true)
            }

        } catch (err) {
            setLoading(false) // not load forever
            console.log(err);
        }
    }
    return {
        login, error, loading
    }
}