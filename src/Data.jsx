import { createContext } from "react";


const Appcontext = createContext();

export const DataProvider = (props)=>{
        const data = {
            name:"saurabh kumar",
            rollnumber:45,
        }
        return (
            <Appcontext.Provider value={data}>
                {props.childern}
            </Appcontext.Provider>
        )
}

export default Appcontext;