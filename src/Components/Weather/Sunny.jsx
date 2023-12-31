export default function Sunny() {
  return (
    <div className="day">
      <div className="day-of-week">Thur</div>
      <div className="date">9</div>

      <div className="bar sunny">
        <div className="weather">
          <svg role="img" width="208" height="213" viewBox="0 0 208 213">
            <use xlinkHref="#sunny"></use>
          </svg>
        </div>
        <div className="temperature">
          65<span className="degrees">&deg;</span>
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
