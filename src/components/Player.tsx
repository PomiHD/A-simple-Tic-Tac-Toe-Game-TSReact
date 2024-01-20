import React from "react";
import { useState } from "react";

export default function Player({ name, symbol }) {
    // now we want to update this component when save player info, thus we use useSate()
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true)
    }

    let playerName = <span className={"player-name"}>{name}</span>;
    if(isEditing){
        playerName = <input type ="text" required/>
    }
    return (
      <li>
        <span className={"player"}>
          {playerName}
          <span className={"player-symbol"}> {symbol}</span>
        </span>
        <button onClick={handleEditClick}>Edit</button>
      </li>
    );
}
