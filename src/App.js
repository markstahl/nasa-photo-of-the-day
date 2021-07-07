import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Carousel from "./components/Carousel";
import styled from 'styled-components';

const Container = styled.div`
text-align: center;
background-color: grey;
`

const Title = styled.div`
text-align: center;
padding: 10px;
font-weight: 800;
color: transparent;
font-size: 90px;
background: url("https://s3.amazonaws.com/psiu/wallpapers/heic0604a/heic0604a_tablet.jpg");
background-position: 40% 50%;
-webkit-background-clip: text;
position: relative;
text-align: center;
line-height: 90px;
letter-spacing: 5px;
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: black;
`

const Copyright = styled.div`
margin-top: 5%;
font-size: 28px;
`

function App() {

  const defaultImg = {
    copyright: "Charlie Bracken",
    date: "2019-09-07",
    explanation: "The mysterious blue reflection nebula found in catalogs as VdB 152 or Ced 201 really is very faint. It lies at the tip of the long dark nebula Barnard 175 in a dusty complex that has also been called Wolf's Cave. At the center of this deep and widefield telescopic view, the cosmic apparitions are nearly 1,400 light-years away along the northern Milky Way in the royal constellation Cepheus. Near the edge of a large molecular cloud, pockets of interstellar dust in the region block light from background stars or scatter light from the embedded bright star giving the the nebula its characteristic blue color. Ultraviolet light from the star is also thought to cause a dim reddish luminescence in the nebular dust. Though stars do form in molecular clouds, this star seems to have only accidentally wandered into the area, as its measured velocity through space is very different from the cloud's velocity. Another dense, obscuring dark nebula, LDN 1221, is easy to spot at the upper right in the frame, while the more colorful planetary nebula Dengel-Hartl 5 is just below center. Faint reddish emission from an ancient supernova remnant can also be traced (lower right to upper left) against the dust-rich complex in Cepheus.",
    hdurl: "https://apod.nasa.gov/apod/image/1909/WolfsCaveCBMDMW.jpg",
    media_type: "image",
    service_version: "v1",
    title: "In Wolf's Cave",
    url: "https://apod.nasa.gov/apod/image/1909/WolfsCaveCBMDMW1024.jpg"
    }
    
  const [image, setImage] = useState(defaultImg);
  const [date, setDate] = useState(new Date(2021, 2, 21));
  const apiKey = "25txRVNoCSajTsnqqaCVyuCwHw688BNQHR103lm3";

  useEffect(() => {
    async function getImage(dateObj) {
      const dateStr = date.toJSON().slice(0,10);
      try {
        const apodObj = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateStr}`);
        setImage(apodObj.data);
      } catch (err) {
        console.log(err);
      }
    }
    getImage(date);
  }, [date])

  const dateHandler = (change) => {
    if (change === "left") {
      setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1));
    } else if (change === "right") {
      setDate(new Date(date.getFullYear(), date.getMonth(), 1 + date.getDate()));
    } else {
      setDate(new Date(change.slice(0,4), parseInt(change.slice(5,7)), parseInt(change.slice(8,10))));
    }
  }

  return (
    <Container>
      <Title>NASA Photo Of The Day</Title>
      <Carousel image={image} date={date.toJSON().slice(0,10)} func={dateHandler}/>
      <Copyright>Image Copyright: {image.copyright ? image.copyright : "Public Domain"}</Copyright>
    </Container>
  );
}

export default App;