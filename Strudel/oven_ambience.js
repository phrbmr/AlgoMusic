// "Oven Ambience" @by phrbmr
// @details second exercise on using Strudel

setcpm(60/4)

let amb_pattern = "0 <2 [2 4 2 8]> <7> <5 9>"

$ambience: n(amb_pattern.add("<-12>")).scale("F:minor").o(1)
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



await initHydra()

osc(5, -.1, .5).rotate(0, .2).kaleid().repeat(5).out(o0)
noise(4).color(-2, 1).colorama().out(o1)
shape(3).blend(shape(H(amb_pattern)).color(5, 0)).repeat(3, 2).scrollX(.01, .01).color(1, 0).colorama(2).rotate(0, -.01).blend(shape(4, 0.4).rotate(0, 0.01)).out(o2)



src(o0).blend(noise(100)).blend(o2).modulate(o1).out(o3)
render(o3)

