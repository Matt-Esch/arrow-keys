var Delta = require("delta-stream")
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
    var delta = Delta()
        , id = uuid()

    fps = fps || 60

    var timeOffset = 1000.0 / fps

    setTimeout(move, timeOffset)
    
    return delta

    function move() {
        var changes = getChanges()

        if (changes !== null) {
            if (changes.x) {
                delta.set("x", changes.x)
            }

            if (changes.y) {
                delta.set("y", changes.y)
            }
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