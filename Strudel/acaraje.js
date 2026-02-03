// "Acarajé" @by phrbmr

//const base_chords = "Dm Dm/F E7 Eb7"

setcpm(120/4)
const drum_bank = "kr55"


$: s("hh(16,16)").slow(2).n(irand(5).ribbon(50, 2)).bank(drum_bank)
  .gain(rand.range(.3, .6)).pan(rand.range(.2, .8)).lpf(5000)
  ._scope()

$: s("sd").beat("0, 3, 6, 10, 13", 16).slow(2).n(irand(5).ribbon(50, 2)).bank(drum_bank)
  .gain(rand.range(.3, .6)).pan(rand.range(.2, .8)).lpf(5000).delay(.1)
  ._scope()

$: s("ht").beat("0, 3, 4, 7, 8, 11, 12, 15", 16).slow(2).n(irand(5).ribbon(50, 2)).bank(drum_bank)
  .gain(rand.range(.3, .6)).pan(perlin.range(.2, .8)).lpf(5000).delay(.25)
  ._scope()

$: chord("<Dm [Dm,F] E7 Eb7>").voicing().s("piano").struct("<1 0 1 1>*4").trans("<0 12>/4").mask("<1 0>".slow(16))
  .gain(rand.range(.2, 1.2))
  ._pianoroll()



await initHydra()
osc(1, .9, 300).out(o0)
shape(1).blend(noise().rotate( () => time%360, () => Math.sin(time/20)/1000 )).color(5,0).out(o1)
shape(50,0.2,0.1).color(0,3).out(o2)


src(o0).diff(o1).diff(o2).out(o3)

render(o3)