import partlyCloudy from "/images/partly-cloudy.svg";
import precipitation from "/images/precipitation.svg";
import low from "/images/low.svg";

export default function PartlyCloudy({ data }) {
  return (
    <div className="day">
      <div className="day-of-week">Sun</div>
      <div className="date">12</div>

      <div className="bar partly-cloudy">
        <div className="weather">
          <img src={partlyCloudy} alt="Partly Cloudy" />
        </div>
        <div className="temperature">
          57<span className="degrees">&deg;</span>
        </div>
        <div className="content">
          <div className="precipitation">
            <img src={precipitation} alt="Precipitation" />
            84%
          </div>
          <div className="low">
            <img src={low} alt="Low" />
            28&deg;
          </div>
        </div>
      </div>
    </div>
  );
}
