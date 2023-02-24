import { useState } from "react";

export const useForm =()=>{

    const [search , setSearch] = useState("")

    const handleSubmit=(event)=>{
        event.preventDefault()
        
        const inputValue = event.target.add.value;
        setSearch(inputValue)
    }

   

    return  {search, setSearch, handleSubmit}
     
}