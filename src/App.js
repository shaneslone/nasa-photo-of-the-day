import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';
import './App.css';
import Post from './Post';

function App() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setImageData(res.data);
      })
      .catch(err => {
        debugger;
      });
    console.log(imageData);
  }, []);

  return (
    <div className='App'>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{' '}
        <span role='img' aria-label='go!'>
          🚀
        </span>
        !
      </p>
      {/* <Post
        title={imageData.title}
        image={imageData.url}
        description={imageData.explanation}
      /> */}
    </div>
  );
}

export default App;
