var arr = [
  "https://cdn.jsdelivr.net/gh/pavelvasev/vr-points-game@master/krako.js",
  "https://cdn.jsdelivr.net/gh/pavelvasev/vr-points-game@master/points-game/init.js"
];

export default function setup(vz) {
  var promises = [];

  for (var i=0; i<arr.length; i++) {
    try {
      var p = import( arr[i] );
      p.then( function(module) {
        module.default( vz );
      });
    } catch (err) {
      console.error("library-one: failed to import",arr[i],err );
    }
  }
  
  return Promise.all( promises );
}
