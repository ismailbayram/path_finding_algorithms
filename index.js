
var mapMatrixes = {
  "one": [
    [0, 200, 79, null, null],  // A to others
    [200, 0, null, null, 223],   // B to others
    [79, null, 0, 96, 189],   // C to others
    [null, null, 96, 0, 150],   // D to others
    [null, 223, 189, 150, 0],   // E to others
  ],
  "two": [
    [0, 200, 79, null, null, null, null, null, null, null],  // A to others
    [200, 0, null, null, 223, 312, null, null, null, null],   // B to others
    [79, null, 0, 96, 189, null, null, null, null, null],   // C to others
    [null, null, 96, 0, 150, null, 56, null, null, null],   // D to others
    [null, 223, 189, 150, 0, null, 77, null, 120],   // E to others
    [null, 312, null, null, null, 0, null, 120, null], // F to others
    [null, null, null, 56, 77, null, 0, null, null, 150], // G to others
    [null, null, null, null, null, 120, null, 0, 56, null], // H to others
    [null, null, null, null, 120, null, null, 56, 0, 200], // I to others
    [null, null, null, null, null, null, 150, null, 200, 0], // J to others
  ],
  "three": [
    [0, 200, 79, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],  // A to others
    [200, 0, null, null, 223, 312, null, null, null, null, null, null, null, null, null, null, null, null, null, null],   // B to others
    [79, null, 0, 96, 189, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],   // C to others
    [null, null, 96, 0, 150, null, 56, null, null, null, null, null, null, null, 72, null, null, null, null, null],   // D to others
    [null, 223, 189, 150, 0, null, 77, null, 120, null, 45, null, null, null, null, null, null, null, null, null],   // E to others
    [null, 312, null, null, null, 0, null, 120, null, null, null, 37, null, null, null, null, null, null, null, null], // F to others
    [null, null, null, 56, 77, null, 0, null, null, 150, null, null, null, null, null, null, null, 74, null, null], // G to others
    [null, null, null, null, null, 120, null, 0, 56, null, null, null, null, 52, null, null, null, null, null, null], // H to others
    [null, null, null, null, 120, null, null, 56, 0, 200, null, null, null, null, null, null, null, null, null, null], // I to others
    [null, null, null, null, null, null, 150, null, 200, 0, 57, null, null, null, null, null, null, null, 52, null], // J to others
    [null, null, null, null, 45, null, null, null, null, 57, 0, null, null, null, null, null, null, null, null, null], // K to others
    [null, null, null, null, null, 37, null, null, null, null, null, 0, 45, null, null, null, null, null, null, null], // L to others
    [null, null, null, null, null, null, null, null, null, null, null, 45, 0, 67, null, null, null, null, null, null], // M to others
    [null, null, null, null, null, null, null, 52, null, null, null, null, 67, 0, null, null, null, null, null, null], // N to others
    [null, null, null, 72, null, null, null, null, null, null, null, null, null, null, 0, 122, null, null, null, null], // O to others
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 122, 0, 75, null, null, null], // P to others
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 75, 0, 64, null, null], // R to others
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 64, 0, null, null], // S to others
    [null, null, null, null, null, null, null, null, null, 52, null, null, null, null, null, null, null, null, 0, 22], // T to others
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 22, 0], // U to others
  ]
}

var mapCitiesCoordinates = { // places of the cities
  "one": [[0,0], [200, 0], [80, 80], [20, 200], [195, 223]],
  "two": [[0,0], [200, 0], [80, 80], [20, 200], [195, 223], [512, 10], [140, 310], [450, 120], [440, 200], [380, 320]],
  "three": [[0,0], [200, 0], [80, 80], [20, 200], [195, 223], [512, 10], [140, 310], [450, 120], [440, 200], [380, 320],
            [295, 250], [350, 50], [345,  110], [335, 185], [15, 295], [75, 348], [116, 400], [250, 440], [510, 375], [532, 450]],
}

var mapCitiesA_Distances = {
  "one": [180, 50, 180, 150],
  "two": [180, 50, 180, 150, 250, 217, 400, 510, 620],
  "three": [180, 50, 180, 150, 250, 217, 400, 510, 620, 180, 220, 245, 287, 234, 301, 352, 401, 711, 733],
}

var mapCities = {
  "one": ["a", "b", "c", "d", "e"],
  "two": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  "three": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u"],
}

var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

function drawLabledLine(label, x, y, x1, y1, color = "#aaa", fontSize = 16) {
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
  ctx.fillText(label, distAlong, offset + 8);

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
  for (var i = 0; i < cities.length; i++) {
      html += `<option value="city-${cities[i]}">City ${cities[i].toUpperCase()}</option>`
  }
  $destination.innerHTML = html;
}
changeMap();

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