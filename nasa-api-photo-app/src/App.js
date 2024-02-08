import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [apodArray, setApodArray] = useState([]);
  /* 

  Pull from the Nasa Api Astronomy Picture of the Day (APOD) (https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=?) to display a picture. Display the title of the image below the picture. 
  Arrow to the right to proceed to the next photo. Start w/ index 0, when hits button move to 1, up to last image- on last image, return to first image


  Make the API call and check the data in DevTools probably console.log Network tag

  State object holds the entire data array
  use onClick? some event handler for when button is clicked to increase the index by 1 and move through the array
  
  */
  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=4152kcah9l6pp9MQnCH3g1V0t3epenNK6p6mPE4d&count=5");
      const apodJson = await response.json();
      setApodArray(apodJson);
    }
    makeRequest()
  }, []) // useEffect using an empty dependancy array- empty means it will only run once (the array will never change and won't trigger the callback function again)
console.log('render')
  return (
    <div className="App">
      <div className='photo-block'>
        <img src="https://placekitten.com/300/300" />
        <p>Name of photo</p>
      </div>
      <button>{'>'}</button>
    </div>
  );
}

export default App;
