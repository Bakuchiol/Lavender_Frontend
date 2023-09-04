import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";


const UpdateEntry = () => {
    const {id} = useParams()
    const {user} = useAuthContext()
    const [ formData, setFormData ] = useState({
        title: '',
        content: '',
    })

    useEffect(() => {
        const fetchEntryData = async() => {
            try {
                const response = await fetch(`http://localhost:4000/api/jpurnal/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                })

                if(!response.ok){
                    throw new Error('Failed to fetch data.')
                }

                const data = await response.json()
                setFormData(data)

            } catch (err) {
                console.log(err);
            }
        }
        fetchEntryData()
    }, [id, user.token])

    // function for updating
    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFormSubmit = async(e) => {
        e.preventDefault()

        try {
            const response = await fetch(`http://localhost:4000/api/jpurnal/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                },
                body : JSON.stringify(formData)
            })
            
            if(response.ok){
                // goes back to user home page/all entries
            }else{
                throw new Error('Failed to update entry.')
            }
            
        } catch (err) {
            console.log(err);
        }
    }

    // form
    return (
        <div>
            <h2>Edit Entry</h2>
            <form onSubmit={handleFormSubmit}>
                <label
                    htmlFor="title">
                        Title
                </label>
                <input 
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleFormChange}
                />
                <label
                    htmlFor="content">
                    Entry
                </label>
                <textarea 
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleFormChange}
                />
                <button type="sumit">Update Entry</button>
            </form>
        </div>
    )

}

export default UpdateEntry