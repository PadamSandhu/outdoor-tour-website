import React from 'react';

export default function Booking() {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Start booking now</h2>
              </div>
              <div className="form__group">
                <input type="text" className="form__input" placeholder="Full Name" id="name" required />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>

              <div className="form__group">
                <input type="email" className="form__input" placeholder="Email Address" id="email" required />
                <label htmlFor="email" className="form__label">
                  Email Address
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
