// "Metal Pan" @by phrbmr
// @details Pasta metal exctracted from a nudel.cc session!

setcpm(120/4)

$pasta_metal: note("0, 7").add(note("<f2 f#2 d3 e3 g#2 e2 d#2 d2>")).struct("<x _ x _ >".fast(12))
  .s("gm_distortion_guitar").n("3 | 4 | 5".fast(12)).dec(2)
  //.degradeBy(.2)
  .room(.7)
  .dec(.2)
  .sustain(.6)
  .release(.2)
  .distort(4)
  .lpf(700)
  .penv(-.3)
  .pattack(.1)
  .postgain(3)
  .orbit(5)
  ._pianoroll()