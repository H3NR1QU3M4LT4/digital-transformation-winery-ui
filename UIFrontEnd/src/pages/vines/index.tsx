import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CustomTable from '../../components/Table';
import { get_sensor_vines_records, IVines, IWineQuality } from '../../services/MLService'

const Vines = () => {
  const location = useLocation();
  const { register, handleSubmit } = useForm();
  const [tableData, setTableData] = useState<IVines[] | IWineQuality[] | undefined>([])

  useEffect(() => {
    get_sensor_vines_records().then((data) => setTableData(data))
  }, []);

  return (
    <>
      <p className='justify-center container-fluid flex pt-6 pb-2 font-primary text-2xl font-bold md:text-4xl text-gray-700'>Previsão da Qualidade do Vinho</p>
      <p className='justify-center container-fluid flex pb-16 text-gray-600' >Com base nos dados dos sensores</p>
      <CustomTable tableData={tableData} typeO={"Vine"} />
    </>
  );
};

export default Vines;
