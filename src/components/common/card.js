import React from 'react';

export default function Card(props) {
  const customClass = props.customClass ? props.customClass : '';
  return (
    <div className="card">
      <div className={`card__side card__side--front card__side--front--${customClass}`}>
        <div className={`card__picture card__picture--${customClass}`}>&nbsp;</div>

        <h4 className="card__heading">
          <span className={`card__heading-span card__heading-span--${customClass}`}>
            {props.frontCard.heading ? props.frontCard.heading : ''}
          </span>
        </h4>

        <div className="card__details">
          <ul>
            {props.frontCard.descList
              ? props.frontCard.descList.map((data, id) => <li key={id.toString()}>{data}</li>)
              : null}
          </ul>
        </div>
      </div>

      <div className={`card__side card__side--back card__side--back--${customClass}`}>Back</div>
    </div>
  );
}
