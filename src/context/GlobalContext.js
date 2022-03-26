
import React, {createContext, useEffect, useState} from "react";
const GlobalContext = createContext();


const GlobalProvider = ({children}) => {
    const [count,setCount]=useState(0)
  
   const incrementCount=()=>{
       setCount(count+1)
   }
   const decrementCount=()=>{
       setCount(count-1)
   }

    return (
        <GlobalContext.Provider
            value={{
                incrementCount,
                count,
                decrementCount
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
export {GlobalProvider};