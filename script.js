const svg = document.getElementById("board");

let drawing = false;
let polyline = null;

svg.addEventListener("mousedown", (e) => {
  drawing = true;

  polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  polyline.setAttribute("fill", "none");
  polyline.setAttribute("stroke", "black");
  polyline.setAttribute("stroke-width", "2");
  polyline.setAttribute("points", "");

  svg.appendChild(polyline);
});

svg.addEventListener("mousemove", (e) => {
  if (!drawing) return;

  const point = `${e.offsetX},${e.offsetY}`;
  const points = polyline.getAttribute("points");
  polyline.setAttribute("points", points + " " + point);
});

svg.addEventListener("mouseup", () => {
  drawing = false;
});

svg.addEventListener("mouseleave", () => {
  drawing = false;
});
