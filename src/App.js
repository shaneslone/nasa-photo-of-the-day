import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';
import './App.css';
import Post from './Post';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [imageData, setImageData] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = date => {
    return `${selectedDate.getFullYear()}-${
      selectedDate.getMonth() + 1
    }-${selectedDate.getDate()}`;
  };

  useEffect(() => {
    const setData = () => {
      axios
        .get(
          `${BASE_URL}?date=${formattedDate(selectedDate)}&api_key=${API_KEY}`
        )
        .then(res => {
          setImageData(res.data);
        })
        .catch(err => {
          debugger;
        });
    };
    setData();
  }, [selectedDate]);
  console.log(selectedDate);
  return (
    <div className='App'>
      <h2>Pick a date:</h2>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat='yyyy-MM-dd'
        maxDate={new Date()}
      />
      <Post
        title={imageData.title}
        image={imageData.url}
        description={imageData.explanation}
      />
    </div>
  );
}

export default App;
