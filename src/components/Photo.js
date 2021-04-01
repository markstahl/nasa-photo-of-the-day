import React from "react";
import styled from 'styled-components';

const Title = styled.div`
text-align: center;
padding: 10px;
font-weight: 800;
color: transparent;
font-size: 45px;
background: url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-orion-nebula-robert-gendler.jpg");
background-position: 40% 50%;
-webkit-background-clip: text;
position: relative;
text-align: center;
line-height: 90px;
letter-spacing: 5px;
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: black;
`

const Details = styled.div`
border: 5px solid black;
background-color: grey;
font-size: 35px;
width: 70%;
margin-left: 14%;
margin-top: 5%;
padding: 5px;
color: white;
background: url("https://blenderartists.org/uploads/default/original/4X/7/e/2/7e2d7bea4ac21388c4a96e1371f375c4ce00094b.jpg");
`

export default function Photo(props) {
  return (
    <div className="img-card" key={props.image.date}>
      <Title>{props.image.title}</Title>
      <img className="apod" src={props.image.url} alt={props.image.title}/>
      <Details>{props.image.explanation}</Details>
    </div>
    );
}