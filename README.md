# library-one

An idea is that everyone may pull-request here links to any Viewzavr modules
and thus make them available to everyone who import this library.

# Adding to Viewzavr project

```
import setup_library_one from "https://cdn.jsdelivr.net/gh/viewzavr/library-one@master/init.js";
setup_library_one(vz).then( function() {
 ....
 vz.restoreFromHash();
 } );
```

or, to refresh faster, use specific revision:
```
import setup_library_one from "https://cdn.jsdelivr.net/gh/viewzavr/library-one@d4c9154/init.js";
```

# Future plans

* P1 Make a "checkbox" installation of modules/libraries.
Thus only things that are selected by a user will be loaded.

* P2 Improve Viewzavr for async appearance of types. Thus we may load scene and create objects as their types appear
in Viewzavr type table as their modules loaded.

* P3 Maybe store library just as a js dictionary and let user to do anything with it.

# Notes

* Check if user module returned promise itself and resolve only when it resolved.
Probably not required if we will handle new types (P2).

# License

MIT

# Copyright

2021 Pavel Vasev
