/**
 * Utilities to play RTTL tunes
 * with MakeCode Arcade
 */
namespace rttl {
    function isSpace(s: string, i: number) {
        const c = s.charCodeAt(i)
        return c == 32 || c == 10 || c == 13;
    }

    /**
     * Parses RTTL tunes into MakeCode melodies
     * https://en.wikipedia.org/wiki/Ring_Tone_Transfer_Language
     */
    //% block="convert RTTL $notes to melody"
    //% blockId=rttl_converttomelody
    export function convertToMelody(notes: string): string {
        let defaultd = 1;
        let defaulto = 8;
        let defaultb = 120;

        const zero = "0".charCodeAt(0)
        const nine = "9".charCodeAt(0)
        const dotc = ".".charCodeAt(0)
        const sharp = "#".charCodeAt(0)
        const space = " ".charCodeAt(0)
        const newline = "\n".charCodeAt(0)

        const convertNote = (note: string): string => {
            const onote = note.slice(0)
            // tirm spaces
            let i = 0;
            for(; i < note.length 
                && isSpace(note, i)
                ; ++i) {}
            note = note.slice(i)
            // duration
            for(i = 0; i < note.length 
                && note.charCodeAt(i) >= zero 
                && note.charCodeAt(i) <= nine
                ; ++i) {}
            const d = i == 0 ? defaultd : parseInt(note.substr(0, i))
            note = note.slice(i)
            // note?
            const thenote = note.substr(0, 1)
            note = note.slice(1)
            // #?
            const hassharp = note.charCodeAt(0) === sharp;
            if (hassharp)
                note = note.slice(1)
            // dot?
            const dot = note.charCodeAt(0) == dotc;
            if (dot)
                note = note.slice(1);
            // octave
            for(i = 0; i < note.length 
                && note.charCodeAt(i) >= zero 
                && note.charCodeAt(i) <= nine
                && note.charCodeAt(i) != dotc
                ; ++i) {}
            const octave = i == 0 ? defaulto 
                : parseInt(note.substr(0, i))
            note = note.slice(i)

            const duration = 32 >> d;
            // parsed, render to convert
            const mk = `${thenote}${hassharp ? "#" : ""}${octave}:${duration}`
            return mk;
        }

        const parts = notes.split(':')
        const name = parts[0];
        parts[1].split(',')
            .map(kvs => kvs.split('='))
            .forEach(kv => {
                switch(kv[0]) {
                    case "d": defaultd = parseInt(kv[1]); break;
                    case "o": defaulto = parseInt(kv[1]); break;
                    case "b": defaultb = parseInt(kv[1]); break;
                }
            })
        const data = parts[2].split(',')
        
        const melody = data.map(note => convertNote(note))
            .join(" ");
        return melody
    }
}

const demo = `HauntHouse: d=4,o=5,b=108: 2a4, 2e, 2d#, 2b4, 2a4, 2c, 2d, 2a#4, 2e., e, 1f4, 1a4, 1d#, 2e., d, 2c., b4, 1a4, 1p, 2a4, 2e, 2d#, 2b4, 2a4, 2c, 2d, 2a#4, 2e., e, 1f4, 1a4, 1d#, 2e., d, 2c., b4, 1a4`
console.log("rttl")
console.log(demo)

const melody = rttl.convertToMelody(demo)

console.log("melody")
console.log(melody)

music.playMelody(melody, 120)