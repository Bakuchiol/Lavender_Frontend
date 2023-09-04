// custom hook
import { useContext } from "react";
import { EntryContext } from "../context/EntryContext";

export const useEntryContext = () => {
    const context = useContext(EntryContext)
    // error so it'll work
    // grabs context for us when used
    if(!context)
        throw Error('useEntryContext must be used inside EntryContext Provider')
        return context
    
}