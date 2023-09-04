import { Link } from "react-router-dom"
import { format } from 'date-fns'
import { useEntryContext } from "../hooks/useEntryContext"
import { useAuthContext } from "../hooks/useAuthContext"

const EntryCard = ({ entry }) => {
    const { dispatch } = useEntryContext()
    const { user } = useAuthContext()

    // function to delete
    const deleteEntry = async() => {
        const response = await fetch(`http://localhost:4000/api/journal/${entry._id}`,{
             method: 'DELETE',
             headers: {
                'Authorization': `Bearer ${user.token}`
             }
            })
        const body = await response.text()
        const json = JSON.parse(body)

        if(response.ok){
            dispatch({type: 'DELETE_ENTRY', payload: json})
            console.log('delete success', json);
        }
    }

    return (
        <div>
            <div>
                {/* link to specific post */}
                <h2> 
                    <Link to={`/api/journal/${entry._id}`}>{entry.title}</Link>
                </h2>
                {/* icon for delete */}
                <div>
                    <span
                        onClick={deleteEntry}
                        >delete icon here
                    </span>
                    
                </div>
                <div></div>
            </div>    
            <div>{format(new Date(entry.date), 'MMMM d, y')}</div>
            <p>{entry.content.substring(0, 200) + ' ...'}</p> {/* preview of entry? 200 chars */}
        </div>
    )
}

export default EntryCard