const React = require('react');
const useEffect = React.useEffect;
const useState = React.useState;
require('./Neow.sass');
const Earth = require('./earth.png');
const Meteor_fire = require('./meteor_fire.png');
const Moon = require('./moon.png');
const axios = require('axios');
const moment = require('moment');
const DoubleArrow = require('../../../../global/components/arrows/DoubleArrow');
const FactItem = require('./FactItem');

let makeRequest = updateNeowData => {
  axios
    .get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${moment().format(
        'YYYY-MM-DD'
      )}&end_date=${moment().format(
        'YYYY-MM-DD'
      )}&api_key=zdAPjo9gKdYWID7uzw911QKReTfiMheTdWBl0pqn`
    )
    .then(response => {
      let array =
        response.data.near_earth_objects[moment().format('YYYY-MM-DD')];
      let closest = array.reduce((acc, loc) => {
        if (
          parseInt(acc.close_approach_data[0].miss_distance.kilometers) <
          parseInt(loc.close_approach_data[0].miss_distance.kilometers)
        ) {
          return acc;
        } else {
          return loc;
        }
      });
      console.log(closest);
      updateNeowData(closest);
    })
    .catch(error => {
      console.log(error);
    });
};

function Neow({ size }) {
  const [neowData, updateNeowData] = useState(false);
  useEffect(() => {
    let interval;
    if (!interval) {
      makeRequest(updateNeowData);
    }
    clearInterval(interval);
    interval = setInterval(() => {
      makeRequest(updateNeowData);
    }, 1800000);
  }, []);

  return (
    <div className="Neow" style={size}>
      <div className="Neow__container--row">
        <img className="Neow__earth" alt="" src={Earth} />
        <DoubleArrow />
        <img className="Neow__meteor--fire" alt="" src={Meteor_fire} />
        <img className="Neow__moon" alt="" src={Moon} />
      </div>
      <div className="Neow__fact-board">
        <h4 className="Fact-board__title">Todays NEOW</h4>
        {neowData ? (
          <ul className="Fact-board__list">
            <FactItem title={'Name'} text={neowData.name} />
            <FactItem
              title={'Time'}
              text={neowData.close_approach_data[0].close_approach_date_full}
            />
            <FactItem
              title={'Orbiting Body'}
              text={neowData.close_approach_data[0].orbiting_body}
            />
            <FactItem
              title={'Hazardous Asteroid'}
              text={JSON.stringify(neowData.is_potentially_hazardous_asteroid)}
            />
            <FactItem
              title={'Diameter'}
              text={
                Math.round(
                  neowData.estimated_diameter.meters.estimated_diameter_min
                ) +
                ' ~ ' +
                Math.round(
                  neowData.estimated_diameter.meters.estimated_diameter_max
                )
              }
            />
            <FactItem
              title={'Velocity (km/s)'}
              text={Math.round(
                neowData.close_approach_data[0].relative_velocity
                  .kilometers_per_second
              )}
            />
            <FactItem
              title={'Miss Distance (km)'}
              text={Math.round(
                neowData.close_approach_data[0].miss_distance.kilometers
              )}
            />
          </ul>
        ) : null}
      </div>
    </div>
  );
}

module.exports = Neow;
