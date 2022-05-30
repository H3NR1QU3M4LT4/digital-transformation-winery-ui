import { useState } from 'react';
import { IVines, IWineQuality, predict_vines_quality, predict_wine_quality } from '../../services/MLService';
import Modal, { IResponse } from '../Modal'

interface ITableProps {
  tableData: IVines[] | IWineQuality[] | undefined;
  typeO: string;
}

const CustomTable = (props: ITableProps) => {
  const { tableData, typeO } = props;
  const [modalOpen, setModalOpen] = useState(false)
  const [responseData, setResponseData] = useState<IResponse>()

  let header;
  if (typeO == "Vine") {
    header = ["Temperatura", "Humidade", "Intensidade Chuva", "Velocidade Vento", "Radiação Solar", "Ph Solo", "Action"]
  } else {
    header = ["Acidez", "Acido Cítrico", "Açucar", "Densidade", "pH", "Alcohol", "Action"]
  }

  const handleFunc = (data) => {
    console.log(data)
    if (typeO == "Vine") {
      predict_vines_quality(data).then((r) => { setResponseData(r); setModalOpen(true) })
      setModalOpen(true)
    } else {
      predict_wine_quality(data).then((r) => { setResponseData(r); setModalOpen(true) })
    }
    return undefined
  }

  return (
    <div className="container flex justify-center mx-auto">
      <div className="flex flex-col">
        <div className="w-full">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="whitespace-nowrap">
                  {header.map((headerName) => (<th className='px-6 py-3'>{headerName}</th>))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {tableData?.map((object) => (
                  <tr className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {typeO == "Vine" ? object.air_temperature : parseFloat(object.fixed_acidity).toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {typeO == "Vine" ? parseFloat(object.humidity).toFixed(2) : parseFloat(object.citric_acid).toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {typeO == "Vine" ? parseFloat(object.rain_intensity).toFixed(2) : parseFloat(object.residual_sugar).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {typeO == "Vine" ? parseFloat(object.wind_speed).toFixed(2) : parseFloat(object.density).toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      {typeO == "Vine" ? parseFloat(object.solar_radiation).toFixed(2) : parseFloat(object.pH).toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      {typeO == "Vine" ? parseFloat(object.ph_solo).toFixed(2) : parseFloat(object.alcohol).toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <button className="px-4 py-1 text-sm text-white bg-blue-400 rounded" onClick={() => handleFunc(object)}>Prever</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Modal modalIsOpen={modalOpen} setModalIsOpenToFalse={setModalOpen} data={responseData} />
          </div>
        </div>
      </div>
    </div >
  );
};

export default CustomTable;
