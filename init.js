// insert here links to modules and libraries

var arr = [
  "https://cdn.jsdelivr.net/gh/viewzavr/visualization-components@master/init.js",
  "https://cdn.jsdelivr.net/gh/pavelvasev/vr-points-game@master/krako.js",
  "https://cdn.jsdelivr.net/gh/pavelvasev/vr-points-game@master/points-game/init.js"
];

//////////////////////////////
// our setup function here loads things by import(..) because
// statical import will break an app on any error.

function load( src ) {
  var p = import( src );

  p.then( function(module) {
    // console.log("library-one: module loaded, calling it's setup",src );
    module.default( vz );
  });
  // todo: create new promise

  return p;
}

export default function setup(vz) {
  var promises = [];

  for (var i=0; i<arr.length; i++) {
    try {
      promises.push( load( arr[i] ) );
    } catch (err) {
      console.error("library-one: failed to import",arr[i],err );
    }
  }

  return Promise.allSettled( promises );
}

