namespace music {
    function isSpace(s: string, i: number) {
        const c = s.charCodeAt(i)
        return c == 32 || c == 10 || c == 13;
    }

    function isDigit(s: string, i: number) {
        const c = s.charCodeAt(i)
        return c >= 48 && c <= 57;
    }

    /**
     * Parses RTTTL tunes into MakeCode melodies
     * https://en.wikipedia.org/wiki/Ring_Tone_Transfer_Language
     */
    //% block="convert RTTTL $ringtone to melody"
    //% blockId=rttl_converttomelody
    //% group="Melody"
    export function convertRTTTLToMelody(ringtone: string): string {
        if (!ringtone) 
            return ringtone;

        let defaultd = 1;
        let defaulto = 8;
        let defaultb = 120;

        const dotc = ".".charCodeAt(0)
        const sharp = "#".charCodeAt(0)

        const convertNote = (note: string): string => {
            const onote = note.slice(0)
            // trim spaces
            let i = 0;
            for(; i < note.length && isSpace(note, i); ++i) {}
            note = note.slice(i)
            // duration or default
            for(i = 0; i < note.length && isDigit(note, i); ++i) {}
            const d = i == 0 ? defaultd : parseInt(note.substr(0, i))
            note = note.slice(i)
            // note
            const thenote = note.substr(0, 1).toUpperCase() == "P" ? "r" : note.substr(0, 1)
            note = note.slice(1)
            // #?
            const hassharp = note.charCodeAt(0) === sharp;
            if (hassharp)
                note = note.slice(1)
            // dot?
            const dot = note.charCodeAt(0) == dotc;
            if (dot)
                note = note.slice(1);
            // octave?
            for(i = 0; i < note.length && isDigit(note, i); ++i) {}
            const octave = i == 0 ? defaulto 
                : parseInt(note.substr(0, i))
            note = note.slice(i)

            let duration = Math.floor(32 / d); // Could remove call to Math.floor() to keep remainder
            if (dot)
                duration += duration >> 1;
            // parsed, render to convert
            const mk = `${thenote}${hassharp ? "#" : ""}${octave}:${duration}`
            return mk;
        }

        // <name> <sep> [<defaults>] <sep> <note-command>+
        const parts = ringtone.split(':')
        const name = parts[0];
        const defaults = parts[1];
        const notes = parts[2];

        if (!name || !notes)
            return undefined;

        if (defaults) {
            defaults.split(',')
                .map(kvs => kvs.replace(' ', '').split('='))
                .forEach(kv => {
                    switch(kv[0]) {
                        case "d": defaultd = parseInt(kv[1]); break;
                        case "o": defaulto = parseInt(kv[1]); break;
                        case "b": defaultb = parseInt(kv[1]); break;
                    }
                })
        }

        // and convert all notes to new format
        const data = notes.split(',')
        const melody = data.map(note => convertNote(note))
            .join(" ");
        return melody;
    }
}
