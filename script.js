//your JS code here. If required.
const bands = [
  "Anywhere But Here",
  "The Bled",
  "Counterparts",
  "The Devil Wears Prada",
  "The Midway State",
  "Norma Jean",
  "Oh, Sleeper",
  "An Old Dog",
  "Pierce the Veil",
  "The Plot in You",
  "Say Anything"
];

const ul = document.getElementById("bandList");

bands.forEach(function(band) {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
});