import React from "react";
import { withRouter } from "react-router-dom";

import "./card-styles.css";

const Card = ({ monster, width, height, history, match }) => {
  return (
    <div
      className="card-container"
      onClick={() => history.push(`${match.path}/${monster.id}`)}
    >
      <img
        alt="Avatar"
        src={`https://robohash.org/${monster.id}?set=set2&size=${width}x${height}`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default withRouter(Card);
