export default function Snowy() {
  return (
    <div class="day">
      <div class="day-of-week">Sat</div>
      <div class="date">11</div>

      <div class="bar snowy">
        <div class="weather">
          <svg role="img" width="230" height="196" viewBox="0 0 230 196">
            <use xlink:href="#snowy"></use>
          </svg>
        </div>
        <div class="temperature">
          32<span class="degrees">&deg;</span>
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
