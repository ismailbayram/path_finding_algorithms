var mapMatrixes = {
  "one": [
    [0, 200, 79, null, null],  // Distance from A to others
    [200, 0, null, null, 223],   // Distance from B to others
    [79, null, 0, 96, 189],   // Distance from C to others
    [null, null, 96, 0, 150],   // Distance from D to others
    [null, 223, 189, 150, 0],   // Distance from E to others
  ],
  "two": [
    [0, 200, 79, null, null, null, null, null, null, null],  // Distance from A to others
    [200, 0, null, null, 223, 312, null, null, null, null],   // Distance from B to others
    [79, null, 0, 96, 189, null, null, null, null, null],   // Distance from C to others
    [null, null, 96, 0, 150, null, 56, null, null, null],   // Distance from D to others
    [null, 223, 189, 150, 0, null, 77, null, 120],   // Distance from E to others
    [null, 312, null, null, null, 0, null, 120, null], // Distance from F to others
    [null, null, null, 56, 77, null, 0, null, null, 150], // Distance from G to others
    [null, null, null, null, null, 120, null, 0, 56, null], // Distance from H to others
    [null, null, null, null, 120, null, null, 56, 0, 200], // Distance from I to others
    [null, null, null, null, null, null, 150, null, 200, 0], // Distance from J to others
  ],
  "three": [
    [0, 200, 79, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],  // Distance from A to others
    [200, 0, null, null, 223, 312, null, null, null, null, null, null, null, null, null, null, null, null, null, null],   // Distance from B to others
    [79, null, 0, 96, 189, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],   // Distance from C to others
    [null, null, 96, 0, 150, null, 56, null, null, null, null, null, null, null, 72, null, null, null, null, null],   // Distance from D to others
    [null, 223, 189, 150, 0, null, 77, null, 120, null, 45, null, null, null, null, null, null, null, null, null],   // Distance from E to others
    [null, 312, null, null, null, 0, null, 120, null, null, null, 37, null, null, null, null, null, null, null, null], // Distance from F to others
    [null, null, null, 56, 77, null, 0, null, null, 150, null, null, null, null, null, null, null, 74, null, null], // Distance from G to others
    [null, null, null, null, null, 120, null, 0, 56, null, null, null, null, 52, null, null, null, null, null, null], // Distance from H to others
    [null, null, null, null, 120, null, null, 56, 0, 200, null, null, null, null, null, null, null, null, null, null], // Distance from I to others
    [null, null, null, null, null, null, 150, null, 200, 0, 57, null, null, null, null, null, null, null, 52, null], // Distance from J to others
    [null, null, null, null, 45, null, null, null, null, 57, 0, null, null, null, null, null, null, null, null, null], // Distance from K to others
    [null, null, null, null, null, 37, null, null, null, null, null, 0, 45, null, null, null, null, null, null, null], // Distance from L to others
    [null, null, null, null, null, null, null, null, null, null, null, 45, 0, 67, null, null, null, null, null, null], // Distance from M to others
    [null, null, null, null, null, null, null, 52, null, null, null, null, 67, 0, null, null, null, null, null, null], // Distance from N to others
    [null, null, null, 72, null, null, null, null, null, null, null, null, null, null, 0, 122, null, null, null, null], // Distance from O to others
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 122, 0, 75, null, null, null], // Distance from P to others
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 75, 0, 64, null, null], // Distance from R to others
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 64, 0, null, null], // Distance from S to others
    [null, null, null, null, null, null, null, null, null, 52, null, null, null, null, null, null, null, null, 0, 22], // Distance from T to others
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 22, 0], // Distance from U to others
  ]
}

var mapCitiesCoordinates = { // places of the cities, Coordinates
  "one": [[0,0], [200, 0], [80, 80], [20, 200], [195, 183]],
  "two": [[0,0], [200, 0], [80, 80], [20, 200], [195, 183], [512, 10], [140, 310], [450, 120], [440, 200], [380, 320]],
  "three": [[0,0], [200, 0], [80, 80], [20, 200], [195, 183], [512, 10], [140, 310], [450, 120], [440, 200], [380, 320],
            [295, 250], [350, 50], [325,  110], [335, 165], [15, 295], [75, 348], [116, 400], [250, 440], [510, 375], [532, 450]],
}

var mapBirdFlightDistances = {};

var mapCities = {
  "one": ["a", "b", "c", "d", "e"],
  "two": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  "three": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u"],
}

var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

function drawLabledLine(label, x, y, x1, y1, color = "#aaa", text = true, fontSize = 16, ) {
  ctx.lineWidth="1";
  ctx.strokeStyle="gray"; 
  const w = canvas.width;
  const h = canvas.height;
  ctx.font = fontSize + "px arial";
  ctx.lineWidth = 1;
  ctx.fillStyle = ctx.strokeStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle"; // Rather than mess around with this
                               // I use the same alignment and just change the
                               // position to put the text where it is needed

  // normalize line
  var nx = x1 - x;
  var ny = y1 - y;
  const dist = (nx * nx + ny * ny) ** 0.5;
  nx /= dist;
  ny /= dist;
  
  // set the transform
  ctx.setTransform(nx, ny, -ny, nx, x, y);
  
  // The transformed is now aligned to the line. Along the line is X and 
  // 90 deg clockwise is right of the line
  
  ctx.beginPath();
  ctx.lineTo(0, 0);
  ctx.lineTo(dist, 0);
  ctx.lineTo(dist - 4, -4);
  ctx.stroke();


  var offset = -fontSize * 0.6;
  var distAlong = dist / 2; /// where to put the line
  
  // Use the normal's of the line to workout how
  // to render the text so it is always readable
  if (nx < 0) {
     ctx.setTransform(-nx, -ny, ny, -nx, x, y);
     offset = -offset;
     distAlong = - distAlong;
  }

  if (text) {
    ctx.fillText(label, distAlong, offset + 8);
  }
}

function calculateEuclidianDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function calculateBirdFlightDistances(map, destination) {
  var cities = mapCities[map];
  var $table = $("#info table")[0];
  var html = "";

  document.getElementById("destination-city").innerText = destination.toUpperCase();
  mapBirdFlightDistances = {};

  var distance, $city;
  var $destinationCity = $("#map-" + map).find("#city-" + destination);
  for (var i = 0; i < cities.length; i++) {
    $city = $("#map-" + map).find("#city-" + cities[i])
    distance = calculateEuclidianDistance($city.offset().left, $city.offset().top, $destinationCity.offset().left, $destinationCity.offset().top)
    distance = Math.floor(distance);
    html += `<tr><td>City ${cities[i].toUpperCase()}</td><td>${distance}</td></tr>`;
    mapBirdFlightDistances[cities[i]] = distance;
  }
  $table.innerHTML = html;
}

function placeCitiesAndDrawPaths(map) {
  var coordinates = mapCitiesCoordinates[map];
  var matrix = mapMatrixes[map];
  var cities = mapCities[map];

  for (var i = 0; i < $("#map-" + map).find(".city").length; i++) {
    $($("#map-" + map).find(".city")[i]).css("left", coordinates[i][0] + "px");
    $($("#map-" + map).find(".city")[i]).css("top", coordinates[i][1] + "px");
  }

  var drawnPaths = [];
  for (var i = 0; i < matrix.length; i++) {
    drawnPaths.push([]);
    for (var j = 0; j < matrix[i].length; j++) {
      drawnPaths[i].push(0);
    }
  }

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if(!!matrix[i][j] && drawnPaths[i][j] == 0 && drawnPaths[j][i] == 0) {
        var $city1 = $("#map-" + map).find("#city-"+cities[i]);
        var $city2 = $("#map-" + map).find("#city-"+cities[j]);
        drawLabledLine(matrix[i][j], $city1.offset().left, $city1.offset().top, $city2.offset().left, $city2.offset().top);
        drawnPaths[i][j] = 1;
        drawnPaths[j][i] = 1;
      }
    }
  }

  var $destination = $("#destination")[0];
  var html = "";
  for (var i = 1; i < cities.length; i++) {
    html += `<option value="${cities[i]}">City ${cities[i].toUpperCase()}</option>`;
  }
  $destination.innerHTML = html;
}

function changeMap() {
  var value = $("#map-selection")[0].value;
  $(".map").addClass("hidden");
  $("#map-" + value).removeClass("hidden");
  ctx.save();
  ctx.globalCompositeOperation = 'copy';
  ctx.strokeStyle = 'transparent';
  ctx.beginPath();
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.restore();
  placeCitiesAndDrawPaths(value);
};

changeMap();
var map = $("#map-selection")[0].value;
var $destination = $("#destination")[0].value;
calculateBirdFlightDistances(map, $destination);

function changeDestination() {
  var map = document.getElementById("map-selection").value;
  var destination = document.getElementById("destination").value;
  calculateBirdFlightDistances(map, destination);
}

document.getElementById("findPath").addEventListener("click", function(e) {
  e.preventDefault();
  var map = document.getElementById("map-selection").value;
  var destination = document.getElementById("destination").value;
  var algorithm = document.getElementById("algorithm").value;
  var $result = document.getElementById("result");
  $result.innerText = "";
  var distance;
  changeMap();
  switch(algorithm) {
    case "dfs":
      distance = DepthFirstSearch("a", destination, map);
      break;
    case "bfs":
      distance = BreadthFirstSearch("a", destination, map);
      break;
    case "bestfs":
      distance = BestFirstSearch("a", destination, map);
      break;
    case "astar":
      break;
  }
  $result.innerText = "Path Distance: " + distance;
});