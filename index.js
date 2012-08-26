var through = require("through")
    , uuid = require("node-uuid")
    , KEYS = {
        "37": "left"
        , "38": "up"
        , "39": "right"
        , "40": "down"
    }
    , down = {}

window.addEventListener("keyup", onup)
window.addEventListener("keydown", ondown)

module.exports = ArrowKeys

function ArrowKeys(fps) {
    var stream = through()
        , id = uuid()

    fps = fps || 60

    var timeOffset = 1000.0 / fps

    setTimeout(move, timeOffset)
    
    return stream

    function move() {
        var changes = getChanges()

        if (changes) {
            stream.write([changes, Date.now(), id])
        }

        setTimeout(move, timeOffset)
    }
}

function ondown(event) {
    var key = KEYS[event.which]
    down[key] = true
}

function onup(event) {
    var key = KEYS[event.which]
    down[key] = false
}

function getChanges() {
    var x, y
    if (down.up) {
        y = -1
    } else if (down.down) {
        y = 1
    }

    if (down.left) {
        x = -1
    } else if (down.right) {
        x = 1
    }

    if (!x && !y) {
        return null
    }

    return {
        x: x
        , y: y
    }
}