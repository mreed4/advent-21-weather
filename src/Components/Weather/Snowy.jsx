export default function Snowy() {
  return (
    <div className="day">
      <div className="day-of-week">Sat</div>
      <div className="date">11</div>

      <div className="bar snowy">
        <div className="weather">
          <svg role="img" width="230" height="196" viewBox="0 0 230 196">
            <use xlinkHref="#snowy"></use>
          </svg>
        </div>
        <div className="temperature">
          32<span className="degrees">&deg;</span>
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
