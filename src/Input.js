import { useState } from "react"

export function Input() {

    const [ inputVal, setInputVal ] = useState("");

    return(
        <div>
            {inputVal && <h3>{inputVal}</h3>}
            
            <input 
            value={inputVal} 

            //Basic
            // onChange={ (e) => setInputVal(e.target.value)}
            onChange={ (e) => {
                if(!e.target.value.includes("t")){
                setInputVal(e.target.value)
                }
            }
            } />
        </div>
    )
}