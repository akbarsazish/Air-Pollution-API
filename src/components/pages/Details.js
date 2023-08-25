/* eslint-disable operator-linebreak */
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPollutionData } from '../../redux/slice';
import data from '../data';
import '../../assets/country-details.css';

function Details() {
  const { country } = useParams();
  const [map, setMap] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    data.forEach((e) => {
      if (e.country === country) {
        setMap(e.map);
        setName(e.country);
        const endPoint = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${e.latitude}&lon=${e.longitude}&appid=4328e945cddb46e998f32f24b64a71fb`;
        dispatch(getPollutionData(endPoint));
      }
    });
  }, [country, dispatch]);
  const pollutionData = useSelector((state) => state.pollution.data);
  const loading = useSelector((state) => state.pollution.loading);

  return (
    <div className="details-page">
      <div className="details-header">
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="back-btn"
          onClick={() => navigate('/')}
        />
      </div>
      {!loading ? (
        <div className="county-details">
          <div className="country-info">
            <h1 className="country-name">{name}</h1>
            <img width={222} height={222} src={map} alt="country-map" />
          </div>
          <div className="data-container">
            {pollutionData &&
              pollutionData.map((data) => (
                <div className="data-item" key={data[0]}>
                  <span className="data data-label">
                    Gas:
                  </span>
                  <span className="data">
                    {data[0]}
                  </span>
                  <span className="data">
                    {data[1]}
                    µg/m3
                  </span>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="loading-data">
          <h1>Loading ... </h1>
        </div>
      )}
    </div>
  );
}

export default Details;
