export default function Rainy() {
  return (
    <div class="day">
      <div class="day-of-week">Mon</div>
      <div class="date">13</div>

      <div class="bar rainy">
        <div class="weather">
          <svg role="img" width="160" height="222" viewBox="0 0 160 222">
            <use xlink:href="#rainy"></use>
          </svg>
        </div>
        <div class="temperature">
          63<span class="degrees">&deg;</span>
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
