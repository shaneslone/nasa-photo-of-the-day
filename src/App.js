import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';
import './App.css';
import Post from './Post';

function App() {
  const [imageData, setImageData] = useState({
    title: null,
    url: null,
    explanation: null,
  });

  useEffect(() => {
    const setData = () => {
      axios
        .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
          setImageData(res.data);
        })
        .catch(err => {
          debugger;
        });
    };
    setData();
  }, []);
  return (
    <div className='App'>
      <Post
        title={imageData.title}
        image={imageData.url}
        description={imageData.explanation}
      />
    </div>
  );
}

export default App;
