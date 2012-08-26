# arrow-keys

A stream of arrow keys

## Example

Is compatible with [delta-stream][1]. Emits x, y change in "position" in reaction to arrow keys being pressed.

``` js
var ArrowKeys = require("arrow-keys")
    , arrows = ArrowKeys()

arrows.on("data", function (data) {
    // { y: -1 } { x: -1 } { x: 1 } { y: 1 }
    console.log(data[0])
})

/* NOW MASH UP LEFT RIGHT DOWN IN THAT ORDER */
```

## Installation

`npm install arrow-keys`

## Contributors

 - Raynos

## MIT Licenced

  [1]: http://github.com/Raynos/delta-stream