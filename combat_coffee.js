// Generated by CoffeeScript 2.4.1
(function() {
  var a, div, getRandomInt, h, heroes, i, initiative, k, len, li, monster, ref, runup, sort_by_initiative, ul, w20, w6;

  heroes = ["Konstantin", "Walter", "Olaf"];

  monster = ["Ork", "Riese", "Drache"];

  initiative = {
    "Konstantin": 3,
    "Walter": 1,
    "Olaf": 5
  };

  sort_by_initiative = function(a, b) {
    return initiative[a] < initiative[b];
  };

  //console.log(heroes.sort())
  //console.log(heroes.sort(sort_by_initiative))
  li = function(thing) {
    var ret;
    ret = document.createElement("li");
    ret.innerText = thing;
    return ret;
  };

  div = document.getElementById("add_combatant");

  ul = document.createElement("ul");

  ref = heroes.sort(sort_by_initiative);
  for (i = 0, len = ref.length; i < len; i++) {
    k = ref[i];
    ul.appendChild(li(k + initiative[k]));
  }

  div.appendChild(ul);

  //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random
  getRandomInt = function(min, max) {
    var _max, _min;
    _min = Math.ceil(min);
    _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min)) + _min;
  };

  console.log((function() {
    var j, results;
    results = [];
    for (a = j = 1; j < 100; a = ++j) {
      results.push(getRandomInt(1, 21));
    }
    return results;
  })());

  w20 = function() {
    return getRandomInt(1, 21);
  };

  console.log(w20());

  w6 = function() {
    return getRandomInt(1, 7);
  };

  console.log(w6());

  runup = ((function() {
    var j, len1, results;
    results = [];
    for (j = 0, len1 = heroes.length; j < len1; j++) {
      h = heroes[j];
      results.push([h, w20() + initiative[h]]);
    }
    return results;
  })()).sort(function(a, b) {
    return a[1] < b[1];
  });

  console.log(runup);

}).call(this);
