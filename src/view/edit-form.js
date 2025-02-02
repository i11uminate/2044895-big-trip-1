import AbstractView from './abstract-view';

export const createEditForm= (routePoint) => {
  const { type, city } = routePoint;

  return (
    `<form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" htmlFor="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              <div class="event__type-item">
                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="taxi">
                  <label class="event__type-label  event__type-label--taxi" htmlFor="event-type-taxi-1">Taxi</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="bus">
                  <label class="event__type-label  event__type-label--bus" htmlFor="event-type-bus-1">Bus</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="train">
                  <label class="event__type-label  event__type-label--train"
                         htmlFor="event-type-train-1">Train</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="ship">
                  <label class="event__type-label  event__type-label--ship" htmlFor="event-type-ship-1">Ship</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="drive">
                  <label class="event__type-label  event__type-label--drive"
                         htmlFor="event-type-drive-1">Drive</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="flight" checked>
                  <label class="event__type-label  event__type-label--flight"
                         htmlFor="event-type-flight-1">${type}</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="check-in">
                  <label class="event__type-label  event__type-label--check-in"
                         htmlFor="event-type-check-in-1">Check-in</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="sightseeing">
                  <label class="event__type-label  event__type-label--sightseeing"
                         htmlFor="event-type-sightseeing-1">Sightseeing</label>
              </div>
              <div class="event__type-item">
                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio"
                       name="event-type" value="restaurant">
                  <label class="event__type-label  event__type-label--restaurant"
                         htmlFor="event-type-restaurant-1">Restaurant</label>
              </div>
            </fieldset>
          </div>
      </div>
      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" htmlFor="event-destination-1">
          ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text"
               name="event-destination" value="${city}" list="destination-list-1">
          <datalist id="destination-list-1">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="${city}"></option>
          </datalist>
      </div>
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" htmlFor="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"
               value="18/03/19 12:25">
          &mdash;
          <label class="visually-hidden" htmlFor="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"
                 value="18/03/19 13:35">
      </div>
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" htmlFor="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price"
               value="160">
      </div>
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox"
                   name="event-offer-luggage" checked>
              <label class="event__offer-label" htmlFor="event-offer-luggage-1">
                <span class="event__offer-title">Add luggage</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">50</span>
              </label>
          </div>
          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox"
                   name="event-offer-comfort" checked>
              <label class="event__offer-label" htmlFor="event-offer-comfort-1">
                <span class="event__offer-title">Switch to comfort</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">80</span>
              </label>
          </div>
          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox"
                   name="event-offer-meal">
              <label class="event__offer-label" htmlFor="event-offer-meal-1">
                <span class="event__offer-title">Add meal</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">15</span>
              </label>
          </div>
          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox"
                   name="event-offer-seats">
              <label class="event__offer-label" htmlFor="event-offer-seats-1">
                <span class="event__offer-title">Choose seats</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">5</span>
              </label>
          </div>
          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox"
                   name="event-offer-train">
              <label class="event__offer-label" htmlFor="event-offer-train-1">
                <span class="event__offer-title">Travel by train</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">40</span>
              </label>
          </div>
        </div>
      </section>
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${city}-Mont-Blanc (usually shortened to ${city}) is a resort
          area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the
          Alps, it's renowned for its skiing.</p>
      </section>
    </section>
  </form>`);
};

export default class EditForm extends AbstractView{
  #routePoint = null;

  constructor(routePoint) {
    super();
    this.#routePoint = routePoint;
  }

  setEditSubmitHandeler = (callback) => {
    this._callback.editSubmit = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('submit', this.#editSubmitHandler);
  }

  setEditClickHandeler = (callback) => {
    this._callback.editClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  #editSubmitHandler = (evt) => {
    evt.preventDefault();
    this._callback.editSubmit();
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.editClick();
  }

  get template() {
    return createEditForm(this.#routePoint);
  }
}
