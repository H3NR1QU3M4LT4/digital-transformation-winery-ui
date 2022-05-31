import axios from 'axios';
import configData from '../configuration/config.json';

export interface IWineQuality {
  type: "Wine";
  fixed_acidity: number;
  volatile_acidity: number;
  citric_acid: number;
  residual_sugar: number;
  chlorides: number;
  free_sulfur_dioxide: number;
  total_sulfur_dioxide: number;
  density: number;
  pH: number;
  sulphates: number;
  alcohol: number;
}

export interface IVines {
  type: "Vine";
  air_temperature: number;
  humidity: number;
  rain_intensity: number;
  interval_rain: number;
  total_rain: number;
  wind_speed: number;
  solar_radiation: number;
  sulfur_solo: number;
  ph_solo: number;
  sulphates_solo: number;
  vine_zones: number;
}

export const predict_vines_quality = async (bodyFormData) => {
  let res = await axios({
    method: 'post',
    url: `${configData.ML_API}/predict_vines_quality`,
    data: bodyFormData,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (res) {
    return res.data;
  } else {
    alert('error!');
  }
};

export const predict_wine_quality = async (bodyFormData) => {
  let res = await axios({
    method: 'post',
    url: `${configData.ML_API}/predict_wine_quality`,
    data: bodyFormData,
    headers: {
          'Content-Type': 'application/json',
    },
  });
  if (res) {
    return res.data;
  } else {
    alert('error!');
  }
};

const headers = { 'Content-Type': 'application/json' };

export const simple_post = async (data): Promise<IWineQuality | undefined> => {
  let res = await axios({
    method: 'post',
    url: `${configData.ML_API}/simple_post`,
    data: data,
    headers: {
      'Content-type': 'application/json',
    },
  });
  if (res) {
    console.log(res.data);
    return res.data;
  } else {
    alert('error!');
  }
};

export const get_sensor_wine_quality_records = async (): Promise<IWineQuality[] | undefined> => {
  return await axios
    .get(`${configData.ML_API}/get_sensor_wine_quality_records`)
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

export const get_sensor_vines_records = async (): Promise<IVines[] | undefined> => {
  return await axios.get(`${configData.ML_API}/get_sensor_vines_records`).then((response) => {
    console.log(response);
    return response.data;
  });
};
