import { useState } from "react";
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const{dispatch} = useAuthContext()

    const login = async(email, password) => {
        try {
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
        } catch (err) {
            setLoading(false) // not load forever
            console.log(err);
        }
    }
}