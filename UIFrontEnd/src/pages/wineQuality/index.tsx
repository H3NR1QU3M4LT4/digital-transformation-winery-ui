import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CustomTable from '../../components/Table';
import { get_sensor_wine_quality_records, IVines, IWineQuality } from '../../services/MLService'

const WineQuality = () => {
  const location = useLocation();
  const { register, handleSubmit } = useForm();
  const [tableData, setTableData] = useState<IVines[] | IWineQuality[] | undefined>([])

  useEffect(() => {
    get_sensor_wine_quality_records().then((data) => setTableData(data))
  }, []);

  return (
    <div>
      <p className='justify-center container-fluid flex pt-6 pb-2 font-primary text-2xl font-bold md:text-4xl text-gray-700'>Previsão da Qualidade do Vinho</p>
      <p className='justify-center container-fluid flex pb-16 text-gray-600'>Com base na análise química</p>
      <CustomTable tableData={tableData} typeO={"Wine"} />
    </div>
  );
};

export default WineQuality;