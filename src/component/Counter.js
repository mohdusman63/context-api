import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
const Counter = () => {
    const gContext = useContext(GlobalContext);
    

const increment=()=>{
    gContext.incrementCount()
}
const decrement=()=>{
    gContext.decrementCount()

}

    return (

        <>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter