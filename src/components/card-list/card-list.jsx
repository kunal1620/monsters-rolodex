import React from "react";
import Card from "../card/card";

import "./card-list-styles.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} width="180" height="180" />
      ))}
    </div>
  );
};

export default CardList;
