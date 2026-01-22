// "Oven Ambience" @by phrbmr
// @details second exercise on using Strudel

setcpm(60/4)


$ambience: n(`0 <2 [2 4 2 8]> <7> <5 9>`.add("<-12>")).scale("F:minor").o(1)
  .pan(rand.range(.2, .8))
  ._scope()

$drum: s(`<
hh(5,8,0),
bd(2,8,1),
ch(1,8,7)
>`)
  .o(2)
  .pan(rand.range(.4, .6))
  .lpf(sine.range(500, 8000).slow(2))
  .gain("<.1 .5 .3 >*4").delay(0.25)
  ._scope()

$bass: n(`<[0 2 0!8] ~ ~ [5 5]>*4`.add("<-12 -6>")).scale("F:minor").o(3)
  .sound("sine").gain("<1 .7>")
  .room(1)
  .duck(3).duckattack(.3).duckdepth(.8)
  ._scope()

$high: n(`<0 0 2 2 4 5 8 7 9>`.add(rand.range(-6, 6))).fast(4).scale("F:minor").o(4)
  .gain(sine.range(.2, .5))
  .delay(0.2).room(2).lpf(1000).pan(sine.range(.5, .5))
  ._pianoroll()

$Arp: n("<[0, 2, 5]!2 [0, 4, 6] [2, 4, 6]>").scale("F:minor").o(5)
  .arp("0 [0, <1 3>] 1 [0, <4 8>]").slow(2)
  .partials([1, .3, .5])
  .gain("<.5 .3 .1>").delay(.5).pan(sine.range(.3, .6)).room(2).fm("<1 2 4>")
  ._pianoroll()

$Noise: n("hh(8,8,0)").s("<white>/2").o(6).gain(.01)
  .duck(6).duckattack(.5).duckdepth(.3).room(5).lpf(sine.range(500, 8000).slow(16))
  .pan(sine.range(.4, .7).slow(8))
  ._scope()