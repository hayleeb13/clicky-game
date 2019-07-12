import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
      <span onClick={() => props.removeCharacter(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default CharacterCard;