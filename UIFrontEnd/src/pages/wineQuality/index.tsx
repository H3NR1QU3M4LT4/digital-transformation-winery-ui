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
      <div className="container-fluid flex justify-center">Wine Quality</div>
      <CustomTable tableData={tableData} typeO={"Wine"} />
    </div>
  );
};

export default WineQuality;