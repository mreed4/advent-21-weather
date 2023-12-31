export default function PartlyCloudy() {
  return (
    <div className="day">
      <div className="day-of-week">Sun</div>
      <div className="date">12</div>

      <div className="bar partly-cloudy">
        <div className="weather">
          <svg role="img" width="230" height="209" viewBox="0 0 230 209">
            <use xlinkHref="#partly-cloudy"></use>
          </svg>
        </div>
        <div className="temperature">
          57<span className="degrees">&deg;</span>
        </div>
        <div className="content">
          <div className="precipitation">
            <svg role="img" className="icon">
              <use xlinkHref="#precipitation"></use>
            </svg>
            84%
          </div>
          <div className="low">
            <svg role="img" className="icon">
              <use xlinkHref="#low"></use>
            </svg>
            28&deg;
          </div>
        </div>
      </div>
    </div>
  );
}
