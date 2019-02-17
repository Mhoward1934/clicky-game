import React from "react";
import "./style.css";

const FriendCard = props => (
    <div className="card" onClick={() => props.setClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick= {() => props.removefriend(props.id)}className="remove">𝘅</span>
    </div>
);

export default FriendCard;
