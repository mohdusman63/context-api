import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Home = () => {
    const gContext = useContext(GlobalContext);
    return (

        <>
            <h1>Counter {gContext.count}</h1>

        </>
    )
}

export default Home