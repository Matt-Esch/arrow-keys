var through = require("through")
    , KEYS = {
        "37": "left"
        , "38": "up"
        , "39": "right"
        , "40": "down"
    }
    
module.exports = ArrowKeys

function ArrowKeys() {
    var stream = through()

    window.addEventListener("keydown", listenOnKeys)

    return stream

    function listenOnKeys(event) {
        var key = KEYS[event.which]
        
        if (key) {
            stream.write(key)
        }
    }
}