export default function Sunny() {
  return (
    <div class="day">
      <div class="day-of-week">Thur</div>
      <div class="date">9</div>

      <div class="bar sunny">
        <div class="weather">
          <svg role="img" width="208" height="213" viewBox="0 0 208 213">
            <use xlink:href="#sunny"></use>
          </svg>
        </div>
        <div class="temperature">
          65<span class="degrees">&deg;</span>
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
