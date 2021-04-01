import React from "react";
import Photo from "./Photo.js";
import VideoCard from "./VideoCard.js";
import styled from 'styled-components';

const Button = styled.button`
background: white;
border-radius: 5px;
border: 2px solid plum;
color: plum;
margin: 0.5em 1em;
padding: 0.25em 1em;
`

export default function Carousel(props) {
  return (
    <div className="Carousel">
      <div className="buttons">
        <Button onClick={() =>{
          return props.func("left")
        }}>&larr; Previous</Button>
        <input id="date-picker" type="date" value={props.date} onChange={(event) => {
          return props.func(event.target.value);
        }} />
        <Button onClick={() =>{
          return props.func("right")
        }}>Next &rarr;</Button>
      </div>
      {(props.image.media_type === "image") ? <Photo image={props.image}/> : <VideoCard image={props.image}/>}
    </div>
    )
}