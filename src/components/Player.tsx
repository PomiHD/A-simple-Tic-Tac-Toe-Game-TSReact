import React from "react";
import { useState } from "react";

export default function Player({ initalName, symbol }) {
  // now we want to update this component when save player info, thus we use useSate()
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initalName);

  function handleEditClick() {
    // setIsEditing(!isEditing) // React is scheduling these sate update, not happen immediately
    setIsEditing((edting) => !edting); //but we can use (edting)=>!edting, this can get the latest state of isEditing
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className={"player-name"}>{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li>
      <span className={"player"}>
        {editablePlayerName}
        <span className={"player-symbol"}> {symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
