# arrow-keys

A stream of arrow keys

## Example

``` js
var ArrowKeys = require("arrow-keys")
    , arrows = ArrowKeys()

arrows.on("data", function (key) {
    // up, left, right, down
    console.log(key)
})

/* NOW MASH UP LEFT RIGHT DOWN IN THAT ORDER */
```

## Installation

`npm install arrow-keys`

## Contributors

 - Raynos

## MIT Licenced