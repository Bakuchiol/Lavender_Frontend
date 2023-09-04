import { useForm } from "react-hook-form"

const EntryForm = () => {
    const { register, handleSubmit, setError, reset, formState: {errors} } = useForm()

    const onSubmit = async(data) => {
        const entry = {
            date: data.date,
            title: data.title,
            content: data.content
        }

        try {
            
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
                    {...register("content"), {required: 'required field'}}
                    placeholder="Enter Journal Entry"
                />
                <p>{errors.content?.message}</p>
                <button type="submit" value="submit">Enter</button>
            </form>
        </>
    )
}

export default EntryForm