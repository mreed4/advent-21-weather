export default function Rainy() {
  return (
    <div className="day">
      <div className="day-of-week">Mon</div>
      <div className="date">13</div>

      <div className="bar rainy">
        <div className="weather">
          <svg role="img" width="160" height="222" viewBox="0 0 160 222">
            <use xlinkHref="#rainy"></use>
          </svg>
        </div>
        <div className="temperature">
          63<span className="degrees">&deg;</span>
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
