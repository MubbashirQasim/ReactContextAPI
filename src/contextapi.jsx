import React, { createContext, useState } from "react";
const AppContext = createContext()
const AppProvider = ({children})=>{
    const [counter , setCounter] = useState(0)
    return(
        <AppContext.Provider value={{counter,setCounter}} >{children}</AppContext.Provider>
    )

}

export {AppProvider,AppContext}