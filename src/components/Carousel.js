import React from "react";
import Photo from "./Photo.js";
import VideoCard from "./VideoCard.js";

export default function Carousel(props) {
  return (
    <div className="Carousel">
      <div className="buttons">
        <button className="btn" onClick={() =>{
          return props.func("left")
        }}>&larr; Previous</button>
        <input id="date-picker" type="date" value={props.date} onChange={(event) => {
          return props.func(event.target.value);
        }} />
        <button className="btn" onClick={() =>{
          return props.func("right")
        }}>Next &rarr;</button>
      </div>
      {(props.image.media_type === "image") ? <Photo image={props.image}/> : <VideoCard image={props.image}/>}
    </div>
    )
}