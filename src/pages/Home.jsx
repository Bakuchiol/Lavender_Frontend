import { useEffect } from "react"
import { useEntryContext } from "../hooks/useEntryContext.js"
import { useAuthContext } from "../hooks/useAuthContext.js"
import EntryCard from "../components/EntryCard"
import EntryForm from "../components/EntryForm"

const Home = () => {
    // const [entries, setEntries] = useState(null)
    const { entries, dispatch } = useEntryContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchEntries = async() => {
            const response = await fetch('http://localhost:4000/api/journal',{
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
                
            const json = await response.json()

            // status 200
            if(response.ok){
                dispatch({ type: 'SET_ENTRY', payload: json}) // changed global state
            }
        }
        // run
        if(user) fetchEntries()
    }, [user, dispatch]) //set as dependency

    return (
        <>
            <div>
                <h1> POSTS </h1>

                <ul>
                    {/* map entries to show them on screen*/}
                    {/* 1. check if there are any entries, 
                        2. once entry is there, map it in a component! */}
                    {entries && entries.map(entry => (
                        <EntryCard key={entry._id} entry={entry} />
                    )
                        )}
                </ul>
            </div>
            <div>
                <EntryForm />
            </div>
        </>
    )
}

export default Home