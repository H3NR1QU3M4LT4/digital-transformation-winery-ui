import { useState } from 'react';
import { IVines, IWineQuality } from '../../services/MLService';

interface ITableProps {
  tableData: IVines[] | IWineQuality[] | undefined;
  typeO: string;
}

const CustomTable = (props: ITableProps) => {
  const { tableData, typeO } = props;

  let header;
  if (typeO == "Vine") {
    header = ["Temperatura", "Humidade", "Intensidade Chuva", "Velocidade Vento", "Radiação Solar", "Ph Solo", "Action"]
  } else {
    header = ["Acidez", "Acido Cítrico", "Açucar", "Densidade", "pH", "Alcohol", "Action"]
  }

  return (
    <div className="container flex justify-center mx-auto">
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">
            <table>
              <thead className="bg-gray-50">
                <tr className="whitespace-nowrap">
                  {header.map((headerName) => (<th>{headerName}</th>))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {tableData?.map((object) => (
                  <tr className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {typeO == "Vine" ? object.air_temperature : object.fixed_acidity}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {typeO == "Vine" ? object.humidity : object.citric_acid}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {typeO == "Vine" ? object.rain_intensity : object.residual_sugar}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {typeO == "Vine" ? object.wind_speed : object.density}
                    </td>
                    <td className="px-6 py-4">
                      {typeO == "Vine" ? object.solar_radiation : object.pH}
                    </td>
                    <td className="px-6 py-4">
                      {typeO == "Vine" ? object.ph_solo : object.alcohol}
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="px-4 py-1 text-sm text-white bg-blue-400 rounded">Prever</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  );
};

export default CustomTable;
