import React from 'react';
import Card from '../common/card';

export default function Tours() {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <Card
            customClass="card-1"
            frontCard={{
              heading: 'the sea explorer',
              descList: ['3 day tours', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficulty: easy']
            }}
          />
        </div>
        <div className="col-1-of-3">
          <Card customClass="card-2" frontCard={{ heading: 'the sea explorer' }} />
        </div>
        <div className="col-1-of-3">
          <Card customClass="card-3" frontCard={{ heading: 'the sea explorer' }} />
        </div>
      </div>
    </section>
  );
}
