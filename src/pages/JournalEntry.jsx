import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //param passed in url via :id
import { useAuthContext } from "../hooks/useAuthContext";

// see content of one entry
const JournalEntry = () => {
    const {id} = useParams()
    const [entry, setEntry] = useState(null)
    const {user} = useAuthContext()

    // fetch single entry
    useEffect(() => {
        const fetchEntry = async() => {
            const response = await fetch(`http://localhost:4000/api/journal/${id}`,{
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                setEntry(json)
            }
        }
        if(user) fetchEntry()
    }, [user, id])

    // no entries - return null
    if(!entry){
        return null
    }
    // if there is entry, return entry
    return(
        <div>
            <h2>{entry.title}</h2>
            <div>{entry.date}</div>
            <p>{entry.content}</p>
        </div>
    )
}

export default JournalEntry