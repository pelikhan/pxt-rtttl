// Space before the config section makes parser mad. :-(
// const demo = `Scale:d=4,o=4,b=120: 1c, 2d., 2e, f., g, 8a, 8a#., 16c5., 16d5, 32e5., 32f5`

const demo = `HauntHouse:d=4,o=5,b=108: 2a4, 2e, 2d#, 2b4, 2a4, 2c, 2d, 2a#4, 2e., e, 1f4, 1a4, 1d#, 2e., d, 2c., b4, 1a4, 1p, 2a4, 2e, 2d#, 2b4, 2a4, 2c, 2d, 2a#4, 2e., e, 1f4, 1a4, 1d#, 2e., d, 2c., b4, 1a4`
// const demo = `LeisureSuit:d=16,o=6,b=56:f.5,f#.5,g.5,g#5,32a#5,f5,g#.5,a#.5,32f5,g#5,32a#5,g#5,8c#.,a#5,32c#,a5,a#.5,c#.,32a5,a#5,32c#,d#,8e,c#.,f.,f.,f.,f.,f,32e,d#,8d,a#.5,e,32f,e,32f,c#,d#.,c#`
// const demo = `Scale: d=4,o=4,b=120: 1c, 2d., 2e, f., g, 8a, 8a#., 16c5., 16d5, 32e5., 32f5`

console.log("rttl")
console.log(demo)

const melody = music.convertRTTTLToMelody(demo)

console.log("melody")
console.log(melody)

control.runInParallel(function() {
    music.playMelody(melody, 216)    
})

game.splash("play RTTTL tunes", "in your games...")
