import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import "./App.css";
import Photo from './Components/photo';
import styled from 'styled-components';

const URL = 'https://api.nasa.gov'
const apiKEY = 'erhbfoW9832V67LdgfJO8cfPVc4CB8O6LdJIKJES'
// const entireURL = 'https://api.nasa.gov/planetary/apod?api_key=erhbfoW9832V67LdgfJO8cfPVc4CB8O6LdJIKJES';

function App() {

  const [dailyPhoto, setDailyPhoto] = useState('');



  useEffect( () => { 
    // const fetchPhoto = () => {
      axios
      .get(`${URL}/planetary/apod?api_key=${apiKEY}`)
      .then( (res) => {
        setDailyPhoto(res.data);
        console.log(dailyPhoto);
      })
      .catch( (err) => {
        // debugger;
      })
    // }
    // fetchPhoto();
  }, []);

  //display component - title, image, description 
  // const Photo = (props) => (


  // )

  return (
    <StyledPage className="App">
      <StyledH1> NASA Photo of the Day </StyledH1>
    <Photo dailyPhoto={dailyPhoto} />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  
`
const StyledH1 = styled.h1`
  color: #FC3D21;

  &:hover {
    color: #0B3D91;
}
`



export default App;

// {
//   "date": "2020-12-09",    
//   "explanation": "This was one great scientific instrument. Starting in 1963, the 305-meters across Arecibo Telescope in Puerto Rico USA reigned as the largest single-dish radio telescope in the world for over 50 years. Among numerous firsts and milestones, data from Arecibo has been used to measure the spin of Mercury, map the surface of Venus, discover the first planets outside of our Solar System, verify the existence of gravitational radiation, search for extraterrestrial intelligence, and, reportedly, locate hidden military radar by tracking their reflections from the Moon.  In the process of being decommissioned, the Arecibo Telescope suffered 
// a catastrophic structural collapse early this month, as seen in the featured composite video.",
//   "media_type": "video",
//   "service_version": "v1",
//   "title": "Arecibo Telescope Collapse",
//   "url": "https://www.youtube.com/embed/Eenw0p14ZrM?rel=0"
// }