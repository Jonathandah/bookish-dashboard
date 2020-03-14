const React = require('react');

function Error_sad_smiley({ color }) {
  return (
    <div className="Error" style={{ color: 'red' }}>
      <h2 className="Error__title"> Error! </h2>

      <div className="Error__smiley">
        <div className="part1">{':'}</div>
        <div className="part12">{'('}</div>
      </div>
    </div>
  );
}

module.exports = Error_sad_smiley;
