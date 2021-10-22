// insert here links to modules and libraries

// идея. эта штука не должна так распространятся. если уж она ссылается на облако, так в облаке этот файл и должен быть.
// а если она на локальные ссылается, то тогда пусть уж и ссылается
// и вообще vis-comps при подключении по идее может себя добавить в список потенциальных возможностей
// на выбор пользователя или системы. он как бы управляемая фича...

export function setup( vz, player ) {

  var table = {
  "vis-comps": {
    title: "Visualization components",
    info: "....",
    //url: "https://viewlang.ru/viewzavr-apps/visualization-components/init.js"
    url: vz.getDir( import.meta.url ) + "../visualization-components/init.js"
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
  },
  
  "vr-cinema": {
    title: "CinemaScience 3d viewer",
    info: "....",
    url: "https://viewlang.ru/viewzavr-apps/vr-cinema/src/cinema-viewzavr.js"
  },

  "vr-dubins": {
    title: "Dubins cinema viewer",
    info: "....",
    url: "https://viewlang.ru/viewzavr-apps/vr-dubins/app.js"
  }

  };

  if (player) player.addPackagesTable( table );
  else
  if (typeof(vzPlayer) != "undefined") vzPlayer.addPackagesTable( table );
}
