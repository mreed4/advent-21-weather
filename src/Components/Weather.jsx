function toProperCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function leadingZero(num) {
  // return num < 10 ? `0${num}` : num;
  return num;
}

function SVG({ weather }) {
  function getSVGAttributes(weather) {
    return {
      cloudy: {
        width: 264,
        height: 166,
        viewBox: "0 0 264 166",
      },
      "partly-cloudy": {
        width: 230,
        height: 209,
        viewBox: "0 0 230 209",
      },
      sunny: {
        width: 208,
        height: 213,
        viewBox: "0 0 208 213",
      },
      rainy: {
        width: 160,
        height: 222,
        viewBox: "0 0 160 222",
      },
      snowy: {
        width: 230,
        height: 196,
        viewBox: "0 0 230 196",
      },
      stormy: {
        width: 246,
        height: 187,
        viewBox: "0 0 246 187",
      },
    }[weather];
  }

  return (
    <svg
      role="img"
      width={getSVGAttributes(weather).width}
      height={getSVGAttributes(weather).height}
      viewBox={getSVGAttributes(weather).viewBox}>
      <use xlinkHref={`#${weather}`} href={`#${weather}`}></use>
    </svg>
  );
}

export default function Weather({ data }) {
  return (
    <div className="day">
      <div className="day-of-week">{data.dayName}</div>
      <div className="date">{data.date}</div>

      <div className={`bar ${data.weather}`}>
        <div className="weather">
          <SVG weather={data.weather} />
        </div>
        <div className="temperature">
          {data.temperatureMax}
          <span className="degrees">&deg;</span>
        </div>
        <div className="content">
          <div className="precipitation">
            <svg role="img" className="icon">
              <use xlinkHref="#precipitation" href="#precipitation"></use>
            </svg>{" "}
            {leadingZero(data.precipitation)}%
          </div>
          <div className="low">
            <svg role="img" className="icon">
              <use xlinkHref="#low" href="#low"></use>
            </svg>
            {leadingZero(data.temperatureMin)}&deg;
          </div>
        </div>
      </div>
    </div>
  );
}
