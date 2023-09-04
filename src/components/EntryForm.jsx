import { useForm } from "react-hook-form"
import { useEntryContext } from "../hooks/useEntryContext"

const EntryForm = () => {
    const { register, handleSubmit, setError, reset, formState: {errors} } = useForm()
    const { dispatch } = useEntryContext()

    const onSubmit = async(data) => {
        const entry = {
            date: data.date,
            title: data.title,
            content: data.content
        }

        try {
            const response = await fetch('http://localhost:4000/api/journal', {
                method: 'POST',
                body: JSON.stringify(entry),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const body = await response.text()
            const newEntry = JSON.parse(body)

            if(!response.ok){
                setError('something went wrong', {type: 400})
            }
            if(response.ok){
                reset({
                    title: '',
                    date: '',
                    content: ''
                })
                dispatch({ type: 'CREATE_ENTRY', payload: newEntry}) //update as soon as new entry submitted
                console.log('created new entry', newEntry); // sanity check!
            }
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <h3>Make a New Entry</h3>
                </div>
                <input 
                    type="text"
                    {...register("title", {required: 'required field'})}
                    placeholder="Title"
                />
                <p>{errors.title?.message}</p>
                <input 
                    type="date"
                    {...register("date", {required: 'required field'})}
                />
                <p>{errors.date?.message}</p>
                <textarea
                    rows="25"
                    {...register("content", {required: 'required field'})}
                    placeholder="Enter Journal Entry"
                />
                <p>{errors.content?.message}</p>
                <button type="submit" value="submit">Enter</button>
            </form>
        </>
    )
}

export default EntryForm