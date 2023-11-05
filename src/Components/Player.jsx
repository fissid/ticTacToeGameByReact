import React, { useState } from "react";
export default function Player({ name, symbol }) {
  // editing mode to re-render the page based on the situation
  const [editing, editingChanger] = useState(false);
  //   default nameTag is just for showing the name
  let nameTag = <span className="player-name">{name}</span>;

  const editHandler = () => {
    editingChanger(true);
  };
  //   if situation is in editing mode change the nameTag to an input
  if (editing) {
    nameTag = <input type="text" required />;
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
