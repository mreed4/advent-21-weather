export default function PartlyCloudy() {
  return (
    <div class="day">
      <div class="day-of-week">Sun</div>
      <div class="date">12</div>

      <div class="bar partly-cloudy">
        <div class="weather">
          <svg role="img" width="230" height="209" viewBox="0 0 230 209">
            <use xlink:href="#partly-cloudy"></use>
          </svg>
        </div>
        <div class="temperature">
          57<span class="degrees">&deg;</span>
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
