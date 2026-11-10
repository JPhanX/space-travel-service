import { useState } from "react";

function App() {
const [page, setPage] = useState("start");

const [destination, setDestination] = useState("");

const [fullName, setFullName] = useState("");
const [address1, setAddress1] = useState("");
const [address2, setAddress2] = useState("");
const [town, setTown] = useState("");
const [postcode, setPostcode] = useState("");

  return (
    <>
      <header className="govuk-header" role="banner">
        <div className="govuk-width-container custom-header">

          <a href="/" className="custom-gov-logo">
            GOV.UK
          </a>

          <div className="custom-service-name">
            Space travel service
          </div>

        </div>
      </header>



{page === "start" && (

      <main className="govuk-width-container">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">

            <h1 className="govuk-heading-xl">
              Space travel service
            </h1>

      <p className="govuk-body-l">
  Apply to travel to The Moon or Mars using our space travel programme.
</p>



            <h2 className="govuk-heading-m">What you can do</h2>

            <ul className="govuk-list govuk-list--bullet">
              <li>Choose your destination</li>
              <li>Provide your personal details</li>
              <li>Review your application before submitting it</li>
            </ul>

            <h2 className="govuk-heading-m">Before you start</h2>

            <p className="govuk-body">
              You will need your full name and home address.
            </p>

        <button
  className="govuk-button"
  type="button"
  onClick={() => setPage("destination")}
>
  Start now
</button>


          </div>
        </div>
      </main>
)}

{page === "destination" && (

  <main className="govuk-width-container">

    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">

        <a
          href="#"
          className="govuk-back-link"
          onClick={(e) => {
            e.preventDefault();
            setPage("start");
          }}
        >
          Back
        </a>

        <h1 className="govuk-heading-xl">
          Where would you like to travel?
        </h1>

        <p className="govuk-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt.
        </p>

        <fieldset className="govuk-fieldset">

          <legend className="govuk-fieldset__legend govuk-fieldset__legend--m">
            Select a destination
          </legend>

          <div className="govuk-radios">

            <div className="govuk-radios__item">

              <input
  className="govuk-radios__input"
  id="moon"
  name="destination"
  type="radio"
  value="The Moon"
  checked={destination === "The Moon"}
  onChange={(e) => setDestination(e.target.value)}
/>

              <label
                className="govuk-label govuk-radios__label"
                htmlFor="moon"
              >
                The Moon
              </label>

            </div>

            <div className="govuk-radios__item">

              <input
                className="govuk-radios__input"
                id="mars"
                name="destination"
                type="radio"
                value="Mars"
                checked={destination === "Mars"}
                onChange={(e) => setDestination(e.target.value)}
              />

              <label
                className="govuk-label govuk-radios__label"
                htmlFor="mars"
              >
                Mars
              </label>

            </div>

          </div>

        </fieldset>

        <button
          className="govuk-button"
          type="button"
          disabled={!destination}
         onClick={() => setPage("details")}
        >
          Continue
        </button>

      </div>
    </div>

  </main>

)}

{/* PAGE 3 - PERSONAL DETAILS */}

{page === "details" && (

  <main className="govuk-width-container">
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">

        <a
          href="#"
          className="govuk-back-link"
          onClick={(e) => {
            e.preventDefault();
            setPage("destination");
          }}
        >
          Back
        </a>

        <h1 className="govuk-heading-xl">
          Your personal details
        </h1>

        <p className="govuk-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="fullName">
            Full name
          </label>
          <input
            className="govuk-input"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="address1">
            Address line 1
          </label>
          <input
            className="govuk-input"
            id="address1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
        </div>

        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="address2">
            Address line 2 (optional)
          </label>
          <input
            className="govuk-input"
            id="address2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </div>

        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="town">
            Town or city
          </label>
          <input
            className="govuk-input"
            id="town"
            value={town}
            onChange={(e) => setTown(e.target.value)}
          />
        </div>

        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="postcode">
            Postcode
          </label>
          <input
            className="govuk-input"
            id="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
        </div>

        <button
          className="govuk-button"
          type="button"
          disabled={!fullName || !address1 || !town || !postcode}
          onClick={() => setPage("check")}
        >
          Continue
        </button>

      </div>
    </div>
  </main>

)}




{/* PAGE 4 - CHECK YOUR ANSWERS */}

{page === "check" && (

  <main className="govuk-width-container">

    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">

        <a
          href="#"
          className="govuk-back-link"
          onClick={(e) => {
            e.preventDefault();
            setPage("details");
          }}
        >
          Back
        </a>

        <h1 className="govuk-heading-xl">
          Check your answers
        </h1>

        <p className="govuk-body">
          Check your information before submitting your application.
        </p>

        <h2 className="govuk-heading-m">
          Your destination
        </h2>

        <dl className="govuk-summary-list">

          <div className="govuk-summary-list__row">

            <dt className="govuk-summary-list__key">
              Destination
            </dt>

            <dd className="govuk-summary-list__value">
              {destination}
            </dd>

            <dd className="govuk-summary-list__actions">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("destination");
                }}
              >
                Change
                <span className="govuk-visually-hidden">
                  {" "}destination
                </span>
              </a>
            </dd>

          </div>

        </dl>

        <h2 className="govuk-heading-m">
          Your personal details
        </h2>

        <dl className="govuk-summary-list">

          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">
              Full name
            </dt>
            <dd className="govuk-summary-list__value">
              {fullName}
            </dd>
            <dd className="govuk-summary-list__actions">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("details");
                }}
              >
                Change
                <span className="govuk-visually-hidden">
                  {" "}full name
                </span>
              </a>
            </dd>
          </div>

          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">
              Address line 1
            </dt>
            <dd className="govuk-summary-list__value">
              {address1}
            </dd>
            <dd className="govuk-summary-list__actions"></dd>
          </div>

          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">
              Address line 2
            </dt>
            <dd className="govuk-summary-list__value">
              {address2 || "Not provided"}
            </dd>
            <dd className="govuk-summary-list__actions"></dd>
          </div>

          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">
              Town or city
            </dt>
            <dd className="govuk-summary-list__value">
              {town}
            </dd>
            <dd className="govuk-summary-list__actions"></dd>
          </div>

          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">
              Postcode
            </dt>
            <dd className="govuk-summary-list__value">
              {postcode}
            </dd>
            <dd className="govuk-summary-list__actions"></dd>
          </div>

        </dl>

        <button
          className="govuk-button"
          type="button"
 onClick={() => setPage("confirmation")}

        >
          Confirm and submit
        </button>

      </div>
    </div>

  </main>

)}



{/* PAGE 5 - CONFIRMATION */}

{page === "confirmation" && (

  <main className="govuk-width-container">

    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">

        <div className="govuk-panel govuk-panel--confirmation">

          <h1 className="govuk-panel__title">
            Application complete
          </h1>

          <div className="govuk-panel__body">
            Your application has been submitted successfully.
          </div>

        </div>

        <h2 className="govuk-heading-m">
          What happens next
        </h2>

        <p className="govuk-body">
          Thank you for applying to the Space Travel Service.
        </p>

        <p className="govuk-body">
          Your chosen destination is <strong>{destination}</strong>.
        </p>
   <p className="govuk-body">
We will contact you with further information about your application. Your reference number is ABC123       </p>

        <p className="govuk-body">
          Thank you for using the Space travel service.
        </p>

        <button
          className="govuk-button"
          type="button"
          onClick={() => {
            setDestination("");
            setFullName("");
            setAddress1("");
            setAddress2("");
            setTown("");
            setPostcode("");
            setPage("start");
          }}
        >
          Return to start
        </button>

      </div>
    </div>

  </main>

)}


    <div className="footer-blue-strip"></div>

<footer className="govuk-footer">
  <div className="govuk-width-container">

    <div className="govuk-footer__navigation">
      <div className="govuk-footer__section">
        <h2 className="govuk-footer__heading govuk-heading-m">
          Support links
        </h2>

        <ul className="govuk-footer__inline-list">
          <li className="govuk-footer__inline-list-item">
            <a className="govuk-footer__link" href="#">
              Help
            </a>
          </li>
          <li className="govuk-footer__inline-list-item">
            <a className="govuk-footer__link" href="#">
              Privacy
            </a>
          </li>
          <li className="govuk-footer__inline-list-item">
            <a className="govuk-footer__link" href="#">
              Cookies
            </a>
          </li>
          <li className="govuk-footer__inline-list-item">
            <a className="govuk-footer__link" href="#">
              Accessibility
            </a>
          </li>
        </ul>
      </div>
    </div>

    <hr className="govuk-footer__section-break" />

<div className="govuk-footer__meta">
  <div className="govuk-footer__meta-item">
    All content is available under the Open Government Licence v3.0,
    except where otherwise stated.
  </div>

  <div className="govuk-footer__meta-item">
    © Crown copyright
  </div>
</div>

  </div>
</footer>


    </>
  )
}

export default App
