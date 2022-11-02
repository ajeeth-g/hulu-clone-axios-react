import axios from '../../Helpers/axios';
import React, { useEffect, useState } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './Results.css';
import FlipMove from 'react-flip-move';

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
    };
    fetchData();
  }, [selectedOption]);
  console.log(movies);
  return (
    <div className='results'>
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
