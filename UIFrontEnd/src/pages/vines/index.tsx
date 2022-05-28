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
      <div className="container-fluid flex justify-center">Vines2</div>
      <CustomTable tableData={tableData} typeO={"Vine"} />
    </>
  );
};

export default Vines;
