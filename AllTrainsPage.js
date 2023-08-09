import React, { useEffect, useState } from 'react';
import { getAllTrains } from '../api';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      const response = await getAllTrains();
      setTrains(response);
    };
    fetchTrains();
  }, []);

  return (
    <div className="page-container">
      <h2>All Trains Schedule</h2>
      <ul className="train-list">
        {trains.map((train) => (
          <li key={train.trainNumber}>{train.trainName}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllTrainsPage;
