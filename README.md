Like in all Advent challenges so far, the HTML and CSS here was prebuilt. I converted the page to React. I also converted the SVG code to a React component.

In addition to React, I implemented (1) an API call to a weather service, and (2) the geo-location API to pull real data. The data is then greatly simplified and mapped a new object for use in iteration on the front-end.

Object lookup is used to match weather codes provided by the API, to certain SVGs as provided by the challenge. The selection of SVGs was limited to maybe 6 icons, so the mapping for example maps both "fog" to "clouds", as well as "partly cloudy" to the same "clouds".
