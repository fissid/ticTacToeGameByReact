import React, { useState } from "react";
export default function Player({ name, symbol }) {
  // editing mode to re-render the page based on the situation
  const [editing, editingChanger] = useState(false);
  //   default nameTag is just for showing the name
  let nameTag = <span className="player-name">{name}</span>;

  //   state is changing w.r.t prev state so must pass a function
  const editHandler = () => {
    editingChanger((prevState) => {
      return !prevState;
    });
  };
  const nameInputHandler = () => {};

  //   if situation is in editing mode change the nameTag to an input
  if (editing) {
    nameTag = <input type="text" required value={name} onChange={nameInputHandler} />;
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
