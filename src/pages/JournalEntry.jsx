import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //param passed in url via :id

const JournalEntry = () => {
    const {id} = useParams()
    const { entry, setEntry }=useState(null)

    useEffect(() => {
        const fetchEntries = async() => {
            const response = await fetch(`http://localhost:4000/api/journal/${id}`)
            const json = await response.json()

            if(response.ok){
                setEntry(json)
            }
        }
    })
}

export default JournalEntry