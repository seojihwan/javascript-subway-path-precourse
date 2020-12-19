export default function PathInput() {
  this.template = () => {
    return `<div>
      ${this.departureStationNameInputTemplate()}
      ${this.arrivalStationNameInputTemplate()}
      ${this.searchTypeRadioTemplate()}
      ${this.serachButtonTemplate()}
    </div>`;
  };

  this.departureStationNameInputTemplate = () => {
    return `<div>
      <label for="departure-station-name-input">출발역</label>
      <input id="departure-station-name-input">
    </div>`;
  };

  this.arrivalStationNameInputTemplate = () => {
    return `<div>
    <label for="arrival-station-name-input">도착역</label>
    <input id="arrival-station-name-input">
  </div>`;
  };

  this.searchTypeRadioTemplate = () => {
    return `<div>
      <input type="radio" id="short-distance-input" name="search-type" checked>
      <label for="short-distance-input">최단거리</lable>
      <input type="radio" id="short-time-input" name="search-type">
      <label for="short-time-input">최소시간</lable>
    </div>`;
  };

  this.serachButtonTemplate = () => {
    return `<button id="search-button">길 찾기</button>`;
  };
}
