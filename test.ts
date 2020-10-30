const demo = `HauntHouse: d=4,o=5,b=108: 2a4, 2e, 2d#, 2b4, 2a4, 2c, 2d, 2a#4, 2e., e, 1f4, 1a4, 1d#, 2e., d, 2c., b4, 1a4, 1p, 2a4, 2e, 2d#, 2b4, 2a4, 2c, 2d, 2a#4, 2e., e, 1f4, 1a4, 1d#, 2e., d, 2c., b4, 1a4`
console.log("rttl")
console.log(demo)

const melody = music.convertRTTTLToMelody(demo)

console.log("melody")
console.log(melody)

control.runInParallel(function() {
    music.playMelody(melody, 120)    
})

game.splash("play RTTTL tunes", "in your games...")
