class Stack {
  constructor() {
    this.list = [];
  }

  push(value) {
    this.list.push(value);
  }

  pop() {
    return this.list.pop();
  }

  isEmpty() {
    return !this.list.length;
  }

  flush() {
    this.list = [];
  }
}
 
class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(value) {
    this.list.push(value);
  }

  dequeue() {
    return this.list.shift();
  }

  isEmpty() {
    return !this.list.length;
  }
}

function DFSUtil(stack, visited, matrix, cities, index, finishIndex) {
  for (var i = 0; i < cities.length; i++) {
    if(!!matrix[index][i]) {
      if (i == finishIndex) {
        return i;
      }
      if (!visited[i]) {
        stack.push(i);
        visited[index] = true;
        return DFSUtil(stack, visited, matrix, cities, i, finishIndex);
      }
    }
  }
}

function DepthFirstSearch(start, finish, map) {
  var cities = mapCities[map];
  var matrix = mapMatrixes[map];
  var startIndex = cities.findIndex(function(el) { return el == start});
  var finishIndex = cities.findIndex(function(el) { return el == finish});
  
  var stack = new Stack();
  var visited = new Array(cities.length);
  visited[startIndex] = true;
  
  stack.push(startIndex);
  var found = DFSUtil(stack, visited, matrix, cities, startIndex, finishIndex, distance);

  var distance = 0;
  // draw the path
  for (var i = 1; i < stack.list.length; i++) {
    var $city1 = $("#map-" + map).find("#city-"+cities[stack.list[i]]);
    var $city2 = $("#map-" + map).find("#city-"+cities[stack.list[i - 1]]);
    drawLabledLine(matrix[stack.list[i]][stack.list[i - 1]], $city1.offset().left, $city1.offset().top, $city2.offset().left, $city2.offset().top, "green", false);
    distance += matrix[stack.list[i]][stack.list[i - 1]];
  }
  
  var $city1 = $("#map-" + map).find("#city-"+cities[stack.list[i - 1]]);
  var $city2 = $("#map-" + map).find("#city-"+cities[finishIndex]);
  drawLabledLine(matrix[stack.list[i - 1]][finishIndex], $city1.offset().left, $city1.offset().top, $city2.offset().left, $city2.offset().top, "green", false);
  distance += matrix[stack.list[i - 1]][finishIndex];
  return distance;
}

function BreadthFirstSearch(start, finish, map) {
  var cities = mapCities[map];
  var matrix = mapMatrixes[map];
  var startIndex = cities.findIndex(function(el) { return el == start});
  var finishIndex = cities.findIndex(function(el) { return el == finish});

  var queue = new Queue();
  var visited = new Array(cities.length);
  visited[startIndex] = true;

  var found = false;
  var path, node, newPath;
  queue.enqueue([startIndex]);

  while(!queue.isEmpty() && !found) {
    path = queue.dequeue();
    node = path[path.length - 1];
    if(node == finishIndex) {
      found = true;
    }
    for (var i = 0; i < cities.length; i++) {
      if(!!matrix[node][i] && !visited[i]) {
        visited[i] = true;
        newPath = [...path];
        newPath.push(i);
        queue.enqueue(newPath);
      }
    }
  }

  var distance = 0;
  // draw the path
  for (var i = 0; i < path.length - 1; i++) {
    var $city1 = $("#map-" + map).find("#city-"+ cities[path[i]]);
    var $city2 = $("#map-" + map).find("#city-"+ cities[path[i + 1]]);
    drawLabledLine(matrix[path[i]][path[i + 1]], $city1.offset().left, $city1.offset().top, $city2.offset().left, $city2.offset().top, "green", false);
    distance += matrix[path[i]][path[i + 1]];
  }

  return distance;
}

function BestFirstSearch(start, finish, map) {
  var cities = mapCities[map];
  var matrix = mapMatrixes[map];
  var startIndex = cities.findIndex(function(el) { return el == start});
  var finishIndex = cities.findIndex(function(el) { return el == finish});

  var stack = new Stack();
  var visited = new Array(cities.length);
  visited[startIndex] = true;

  var found = false;
  var path = [], node;
  stack.push(startIndex);
  path.push(startIndex);

  while(!stack.isEmpty() && !found) {
    node = stack.pop();
    if (node == finishIndex) {
      found = true;
    }
    
  }

  var distance = 0;
  // draw the path
  // for (var i = 0; i < path.length - 1; i++) {
  //   var $city1 = $("#map-" + map).find("#city-"+ cities[path[i]]);
  //   var $city2 = $("#map-" + map).find("#city-"+ cities[path[i + 1]]);
  //   drawLabledLine(matrix[path[i]][path[i + 1]], $city1.offset().left, $city1.offset().top, $city2.offset().left, $city2.offset().top, "green", false);
  //   distance += matrix[path[i]][path[i + 1]];
  // }

  return distance;
}