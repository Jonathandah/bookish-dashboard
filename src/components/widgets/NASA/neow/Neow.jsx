const React = require('react');
require('./Neow.sass');
const Earth = require('./earth.png');
const Meteor_fire = require('./meteor_fire.png');
const Moon = require('./moon.png');
const axios = require('axios');
const moment = require('moment');
const DoubleArrow = require('../../../../global/components/arrows/DoubleArrow');

function Neow({ size }) {
  // axios
  //   .get(
  //     `https://api.nasa.gov/neo/rest/v1/feed?start_date=${moment().format(
  //       'YYYY-MM-DD'
  //     )}&end_date=${moment().format('YYYY-MM-DD')}&api_key=DEMO_KEY`
  //   )
  //   .then(response => {
  //     let array =
  //       response.data.near_earth_objects[moment().format('YYYY-MM-DD')];
  //     let closest = array.reduce((acc, loc) => {
  //       if (
  //         parseInt(acc.close_approach_data[0].miss_distance.kilometers) <
  //         parseInt(loc.close_approach_data[0].miss_distance.kilometers)
  //       ) {
  //         return acc;
  //       } else {
  //         return loc;
  //       }
  //     });
  //     console.log(closest);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

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
      </div>
    </div>
  );
}

module.exports = Neow;
