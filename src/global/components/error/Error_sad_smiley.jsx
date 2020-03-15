const React = require('react');
require('./Error_sad_smiley.sass');

function Error_sad_smiley({ color }) {
  return (
    <div className="Error" style={{ color: 'red' }}>
      <h2 className="Error__title"> Error!</h2>
      <div className="Error__smiley">
        <div className="Error-smiley__eyes">{':'}</div>
        <div className="Error-smiley__mouth">{'('}</div>
      </div>
    </div>
  );
}

module.exports = Error_sad_smiley;
