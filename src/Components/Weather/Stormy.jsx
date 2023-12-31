export default function Stormy() {
  return (
    <div class="day">
      <div class="day-of-week">Fri</div>
      <div class="date">10</div>

      <div class="bar stormy">
        <div class="weather">
          <svg role="img" width="246" height="187" viewBox="0 0 246 187">
            <use xlink:href="#stormy"></use>
          </svg>
        </div>
        <div class="temperature">
          67<span class="degrees">&deg;</span>
        </div>
        <div class="content">
          <div class="precipitation">
            <svg role="img" class="icon">
              <use xlink:href="#precipitation"></use>
            </svg>
            84%
          </div>
          <div class="low">
            <svg role="img" class="icon">
              <use xlink:href="#low"></use>
            </svg>
            28&deg;
          </div>
        </div>
      </div>
    </div>
  );
}
