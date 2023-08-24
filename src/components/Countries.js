import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import data from './data';
import '../assets/country.css';

function Countries() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
  }, []);

  let mode = ['light', 'dark'];
  return (
    <div className="container">
      <section className="banner-section">
        <div className="banner">
          <div className="banner-text">
            <h1 className="text-neutral-100 primary-heading text-center">
              Air pollution is the contamination of air due to the presence of
              substances.
            </h1>
          </div>
        </div>
      </section>
      <div>
        <div className="cuntries-container">
          {info.map((country, index) => {
            mode = (index + 1) % 2 === 0 ? [...mode.reverse()] : mode;
            return (
              <div key={country.id} className="country-item">
                <div className={`card ${mode[0]}`} key={country.alpha3}>
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
