import React from "react";

export default function Photo(props) {
  return (
    <div className="img-card" key={props.image.date}>
      <h2>{props.image.title}</h2>
      <img className="apod" src={props.image.url} alt={props.image.title}/>
      <p>{props.image.explanation}</p>
    </div>
    );
}