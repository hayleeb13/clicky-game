import React from "react";
import "./style.css";

const CharacterCard = ({id, image, onClick}) =>
<div className="card">
  <div className="img-container">
  <img
    src={image}
    alt={id}
    id={id}
    onClick={ () => onClick(id) }
  />;
  </div>
</div>
export default CharacterCard;