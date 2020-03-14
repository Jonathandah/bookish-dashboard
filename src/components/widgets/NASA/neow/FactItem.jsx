const React = require('react');
require('./FactItem.sass');

function FactItem({ title, text }) {
  return (
    <li className="FactItem">
      <h6 className="FactItem__title">{title}:</h6>
      <p className="FactItem__text">{text}</p>
    </li>
  );
}

module.exports = FactItem;
