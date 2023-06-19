import { useState } from "react";
import { createContext } from "react";

export  const data = createContext(null);

const DataProvider =({children})=>{
    const [account, setAccount] = useState({
        username:''
    })

    return (
        <data.Provider value={{account,setAccount}}>
        {children}
        </data.Provider>
    )
}

export default DataProvider;