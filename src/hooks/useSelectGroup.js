import { useState } from "react"


export const useSelectGroup = (initialState = {}) => {

    const [values, setvalues] = useState(initialState);

    const handleSelectChange = (e) => {
        setvalues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const resetSelectorGroup = () =>{
        setvalues({...initialState})
    }

    return [
        values,
        handleSelectChange,
        resetSelectorGroup
    ]

}