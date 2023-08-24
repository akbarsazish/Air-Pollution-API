import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import data from './data';
import '../assets/country.css';

function Countries() {
  const [info, setInfo] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredInfo, setFilteredInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
    setFilteredInfo(data);
  }, []);

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);

    const filteredCountries = info.filter((country) => country.country.toLowerCase()
      .includes(inputValue.toLowerCase()));
    setFilteredInfo(filteredCountries);
  };
  /* eslint-disable */ 
  return (
    <div className="container">
      <div className="search-area">
        <input
          type="text"
          className="search-country"
          placeholder="Search country"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>
      <div>
        <div className="cuntries-container">
          {filteredInfo.map((country) => {
            return (
              <div key={country.id} className="country-item">
                <div key={country.alpha3}>
                  <Link className="country-link" to={`/${country.country}`}>
                    <FontAwesomeIcon className="icon-forward" icon={faArrowCircleRight} />
                    <img
                      loading="lazy"
                      width={130}
                      height={140}
                      alt="card"
                      className="img-fluid"
                      src={country.map}
                    />
                    <h3 className="country-name">
                      {country.country}
                    </h3>
                    <small className="text-neutral-100">
                      ALPHA:
                      {' '}
                      {country.alpha3}
                    </small>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Countries;
