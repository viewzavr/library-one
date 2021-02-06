// insert here links to modules and libraries

export function setup( vz, player ) {

  var table = {
  "vis-comps": {
    title: "Visualization components",
    info: "....",
    url: "https://viewlang.ru/viewzavr-apps/visualization-components/init.js"
  },

  "krakozabra": {
    title: "Krakozabra 3d",
    info: "a figure of krakozabra",
    //url: "https://cdn.jsdelivr.net/gh/pavelvasev/vr-points-game@master/krako.js"
    url: "https://viewlang.ru/viewzavr-apps/vr-points-game/krako.js"
  },

  "points-game": {
    title: "Points game algorythm",
    info: "....",
    url: "https://viewlang.ru/viewzavr-apps/vr-points-game/points-game/init.js"
  }

  };

  if (player) player.addPackagesTable( table );
  else
  if (typeof(vzPlayer) != "undefined") vzPlayer.addPackagesTable( table );
}
