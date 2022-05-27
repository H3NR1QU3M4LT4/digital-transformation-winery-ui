import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const Vines = () => {
  const location = useLocation();

  const { register, handleSubmit } = useForm();

  const [converting, setConverting] = useState(false);

  const onSubmit = (data) => {};

  return (<div className="container-fluid flex justify-center">Vines</div>);
};

export default Vines;
