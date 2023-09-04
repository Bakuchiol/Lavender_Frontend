import { Link } from "react-router-dom"


const EntryCard = ({ entry }) => {
    // function to post
    const handleClick = async() => {
        const response = await fetch(`http://localhost:4000/api/journal/${entry._id}`,
            { method: 'DELETE' }
        )
        const body = await response.text()
        const json = JSON.parse(body)

        if(response.ok){
            console.log('delete success', json);
        }
    }

    return (
        <li>
            <span>
                {/* linl to specific post */}
                <h2> 
                    <Link to={`/api/journal/${entry._id}`}>{entry.title}</Link>
                </h2>
                {/* icon for delete */}
                <span
                    onClick={handleClick}
                >delete icon here</span>
            </span>
            <div>{entry.date}</div>
            <p>{entry.content.substring(0, 200) + ' ...'}</p> {/* preview of entry? 200 chars */}
        </li>

    )
}

export default EntryCard