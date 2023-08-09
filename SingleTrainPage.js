import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrain } from '../api';

const SingleTrainPage = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      const response = await getSingleTrain(trainNumber);
      setTrain(response);
    };
    fetchTrain();
  }, [trainNumber]);

  return (
    <div className="page-container">
      {train && (
        <div className="train-details">
          <h2>{train.trainName}</h2>
          <p>Departure Time: {train.departureTime}</p>
          {/* Display more details here */}
        </div>
      )}
    </div>
  );
};

export default SingleTrainPage;
