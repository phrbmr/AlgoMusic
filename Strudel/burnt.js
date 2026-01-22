// "Burnt" @by phrbmr
// @details second exercise on using Strudel


let pat_1 = "c2 <eb2 <g2 g1> <eb1 eb2> <~ c1>>" 
let pat_2 = "eb2 <g2 <c3 eb2> <g1 g2> <~ c1>>" 
const full = `[
c2 <eb2 <g2 g1> <eb1 gb2> <~ c1>>
c2 <eb2 <g2 g1> <eb1 eb3> <~ c1>>
c2 <eb2 <g2 g1> <eb1 eb2> <~ f1>>
eb2 <g2 <c3 eb2> <g1 g2> <~ c3>>
]/4`




$: note(full).fast(8).orbit(1)
  .sound("sawtooth")
  .partials([1, 1, 0, "<.3 0 .5>", "<0 .5 .25>", "<.3 0 0.5>"])
  .delay("<0.25 0.5 0.75>")
  .pan(rand.range(0, 1))
  ._scope()
// Base
$: note(cat(pat_1, pat_2)).orbit(2)
  .sound("sin")
  .lpf(500).room(5).gain(.3)
  ._scope()

// Drums
$: s(`<
bd(5,8,1) bd(5,8,1) bd(5,8,1) bd(3,8,1), 
hh(3,8,2) hh(3,4,2) hh(3,8,2) hh(1,4,1)*2
>`)
  .gain(.05).delay(0.5).orbit(3)
  .lpf(sine.range(100, 5000))


// FX
.duck(4).duckattack(0.2).duckdepth(1)

$: note("<c4 eb4 gb4 <e#4 bb4>>!2*2").orbit(4)
  .sound("triangle")
  .noise(sine.range(0.01, 0.1)).gain(0.05).partials([1, rand, 0.1, rand, 0.1, rand, rand, 0.1])
  .fm("<.1 .2 .4 .8 .4 .2>").jux(rev)
  ._scope().duck(5).duckattack(.5).duckdepth(.7)
const numHarmonics = 22;
  $: n(rand.range(0, 5).segment(16)).repeatCycles(2).scale("C:blues").pan(rand.range(0, 1)).orbit(5)
    .sound("saw")
    .gain(0.05)
    .lpf(tri.range(100, 5000).slow(4)).lpenv(slider(1.04,0,10))
    ._scope()
    
