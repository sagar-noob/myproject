import React, { Component } from 'react'
class Appointment extends Component {
  render() {
    return (
      <section>
        <div className='Appointment'>

          <h1>Appointment Form</h1>
        </div>


        <form action="SEND ADDRESS" id="ft-form" method="POST" accept-charset="UTF-8" />
        <fieldset>
          <legend>For person</legend>
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <div className="two-cols">
            <label>
              Email address
              <input type="email" name="email" required />
            </label>
            <label>
              Phone number
              <input type="tel" name="phone" />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Appointment request</legend>
          <div className='two-cols'>
            <label>
              Datum
              <input type="date" name="Appointment request" required />
            </label>
            <div class="inline">
              <label>
                <input type="hidden" name="Morning desired" value="no" />
                <input type="checkbox" name="Morning desired" value="yes" />
                Morning
              </label>
              <label>
                <input type="hidden" name="Afternoon desired" value="no" />
                <input type="checkbox" name="Afternoon desired" value="yes" />
                Afternoon
              </label>
            </div>
          </div>
          <p>Confirmation requested by</p>
          <div className="inline">
            <label>
              <input type="radio" name="Confirmation requested by" value="email" checked />
              Email
            </label>
            <label>
              <input type="radio" name="Confirmation requested by" value="phone" />
              Phone call
            </label>
          </div>
        </fieldset>


        <button type="sumbit" class="sumbit-btn">Sumbit request</button>



      </section>


    );
  }
}
export default Appointment;