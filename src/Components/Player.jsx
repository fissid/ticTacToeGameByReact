import React, { useState } from "react";
export default function Player({ name, symbol }) {
  // editing mode to re-render the page based on the situation
  const [editing, editingChanger] = useState(false);
  const [playerName, playerNameChnager] = useState(name);
  //   default nameTag is just for showing the name
  let nameTag = <span className="player-name">{playerName}</span>;

  //   state is changing w.r.t prev state so must pass a function
  const editHandler = () => {
    editingChanger((prevState) => !prevState);
  };

  const nameInputHandler = (e) => {
    playerNameChnager(e.target.value);
  };

  //   if situation is in editing mode change the nameTag to an input
  if (editing) {
    nameTag = <input type="text" required value={playerName} onChange={nameInputHandler} />;
  }

  return (
    <li>
      <span className="player">
        {nameTag}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}
