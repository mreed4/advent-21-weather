export default function Cloudy() {
  return (
    <div className="day">
      <div className="day-of-week">Wed</div>
      <div className="date">8</div>

      <div className="bar cloudy">
        <div className="weather">
          <svg role="img">
            <use xlink:href="#cloudy" width="264" height="166" viewBox="0 0 264 166"></use>
          </svg>
        </div>
        <div className="temperature">
          72<span className="degrees">&deg;</span>
        </div>
        <div className="content">
          <div className="precipitation">
            <svg role="img" className="icon">
              <use xlink:href="#precipitation"></use>
            </svg>
            84%
          </div>
          <div className="low">
            <svg role="img" className="icon">
              <use xlink:href="#low"></use>
            </svg>
            28&deg;
          </div>
        </div>
      </div>
    </div>
  );
}
