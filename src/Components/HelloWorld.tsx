import { useState } from "react";

export default function HelloWorld(){
    const [text,setText]=useState("Chabelo");
    
    return (
        <div>
            <input type="text" onChange={evt=> setText(evt.target.value)} />
            <h1>Hello World!!!! {text}</h1>
        </div>        
    );
}