const React = require('react');
const DoubleArrowImage = require('./DoubleArrow.png');

function DoubleArrow() {
  const styles = {
    DoubleArrow: {
      position: 'relative',
      marginLeft: '10px',
      width: '140px',
      minWidth: '140px'
    },
    image: {
      width: '140px',
      minWidth: '140px'
    }
  };

  return (
    <div className="DoubbleArrow" style={styles.DoubleArrow}>
      <img
        className="DoubleArrow__image"
        alt=""
        style={styles.image}
        src={DoubleArrowImage}
      />
    </div>
  );
}

module.exports = DoubleArrow;
