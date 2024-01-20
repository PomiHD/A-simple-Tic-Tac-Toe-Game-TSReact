import React from "react";
import { useState } from "react";

export default function Player({ name, symbol }) {
    // now we want to update this component when save player info, thus we use useSate()
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(!isEditing) // React is scheduling these sate update, not happen immediately
        setIsEditing((edting)=>!edting) //but we can use (edting)=>!edting, this can get the latest state of isEditing
       
    }

    let playerName = <span className={"player-name"}>{name}</span>;
    if(isEditing){
        playerName = <input type ="text" required value={name}/>
    }
    return (
      <li>
        <span className={"player"}>
          {playerName}
          <span className={"player-symbol"}> {symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
      </li>
    );
}
