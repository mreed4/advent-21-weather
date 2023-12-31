export default function Stormy() {
  return (
    <div className="day">
      <div className="day-of-week">Fri</div>
      <div className="date">10</div>

      <div className="bar stormy">
        <div className="weather">
          <svg role="img" width="246" height="187" viewBox="0 0 246 187">
            <use xlinkHref="#stormy"></use>
          </svg>
        </div>
        <div className="temperature">
          67<span className="degrees">&deg;</span>
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
