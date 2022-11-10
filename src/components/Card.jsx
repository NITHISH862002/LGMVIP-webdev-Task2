import React from "react";
import Avatar from "./Avatar";
import Detail from "./Details";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h1 className="name">{props.first_name}</h1>
        <p className="name">{props.second_name}</p>
        <Avatar img={props.avatar} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}
export default Card;
