import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { simple_post } from '../../services/MLService';
import Modal from '../../components/Modal';

const FstPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const onSubmit = (data) => {
    console.log('data', data);
    simple_post(data);
  };

  return (
    <div>
      <div className="text-black text-4xl font-bold py-8 text-left md:m-10 sm: m-5">Fst Page</div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="First name"
            {...register('Name', { required: true, maxLength: 80 })}
          />

          <input type="submit" />
        </form>
        <button type="button" onClick={setModalIsOpenToTrue}>
          Open
        </button>
        <Modal modalIsOpen={modalIsOpen} setModalIsOpenToFalse={setModalIsOpenToFalse} />
      </div>
    </div>
  );
};

export default FstPage;
