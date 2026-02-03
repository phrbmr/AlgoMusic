// "Amb" @by phrbmr

let default_scale = "<c2:minor f2:minor>".slow(4)

$: s("[<bd ~> <[hh ~@.5 hh] [hh ~ ~ ~ oh oh] ~>]*2",).bank("tr909")
  .dec(.4)
  .lpf(rand.range(1000, 3000))
  .pan(rand.range(.4, .6))
  .delay(.5)
  .orbit(1).room(2)

$: n("0 7 0 6 0 5 0 3 0 2 0 1")
  .scale(default_scale)
  .sound("sawtooth")
  .gain(.5).struct("[1!10 [0 1 0 1 0 1]!2]")
  .lpf(sine.range(1000, 8000).slow(16))
  .pan(".2, .8")
  .orbit(1).room(1)

$: n("6 4 2 0")
  .scale(default_scale)
  .sound("sine")
  .strans("<24 12 0 -12>")
  .pan(rand)
  .delay(.75)
  .gain("<1 1.25 1.75 2>")
  .orbit(2).room(2)

$: n("8").scale(default_scale).sound("wineglass").struct("<1 0 1 0 1 1 0>").dec(4)