import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const WineQuality = () => {
  const location = useLocation();

  const { register, handleSubmit } = useForm();

  let dataMachineLearning;

  if (location.state) {
    dataMachineLearning = location.state.response;
    console.log(dataMachineLearning);
  }

  const onSubmit = (data) => {};

  return <div className="container-fluid flex justify-center">Wine Quality</div>;
};

export default WineQuality;
