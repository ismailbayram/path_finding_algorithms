class Node {
  name;
  adjacents = [];

  constructor(name) {
    this.name = name;
  }
}

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
  
  peek() {
    return this.list[this.list.length - 1];
  }

  isEmpty() {
    return !!this.list.length;
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
  var found = DFSUtil(stack, visited, matrix, cities, startIndex, finishIndex)
  for (var i = 1; i < stack.list.length; i++) {
    var $city1 = $("#map-" + map).find("#city-"+cities[stack.list[i]]);
    var $city2 = $("#map-" + map).find("#city-"+cities[stack.list[i - 1]]);
    drawLabledLine(matrix[stack.list[i]][stack.list[i - 1]], $city1.offset().left, $city1.offset().top, $city2.offset().left, $city2.offset().top, "green", false);
  }
  
  var $city1 = $("#map-" + map).find("#city-"+cities[stack.list[i - 1]]);
  var $city2 = $("#map-" + map).find("#city-"+cities[finishIndex]);
  drawLabledLine(matrix[stack.list[i - 1]][finishIndex], $city1.offset().left, $city1.offset().top, $city2.offset().left, $city2.offset().top, "green", false);
}