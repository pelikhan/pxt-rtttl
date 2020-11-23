# RTTTL player

> Open this page at [https://pelikhan.github.io/pxt-rtttl/](https://pelikhan.github.io/pxt-rtttl/)

[Ring Tone Text Transfer Language (RTTTL)](https://en.wikipedia.org/wiki/Ring_Tone_Transfer_Language) 
was developed to be used to transfer ringtones to cellphone 
by Nokia. This MakeCode extension lets you convert RTTTL tunes into MakeCode
melodies.

You will find a new ``convert RTTTL to melody`` block under Music > Melody.

```blocks
let demo = "HauntHouse: d=4,o=5,b=108: 2a4, 2e, 2d#, 2b4, 2a4, 2c, 2d, 2a#4, 2e., e, 1f4, 1a4, 1d#, 2e., d, 2c., b4, 1a4, 1p, 2a4, 2e, 2d#, 2b4, 2a4, 2c, 2d, 2a#4, 2e., e, 1f4, 1a4, 1d#, 2e., d, 2c., b4, 1a4"
let melody = music.convertRTTLToMelody(demo)
music.playMelody(melody, 120)
```

## Forum!

Discuss this extension in the MakeCode forums 
at [https://forum.makecode.com/t/rtttl-tunes-extension/4193](https://forum.makecode.com/t/rtttl-tunes-extension/4193 ).

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/) or 
[https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/pelikhan/pxt-rtttl** and import

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

```package
pxt-rtttl=github:pelikhan/pxt-rtttl
```
