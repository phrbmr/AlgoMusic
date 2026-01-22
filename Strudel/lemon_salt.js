// "Lemon and Salt" @by phrbmr

setcpm(120/4)

const rit_pat = "1 [1 1] [1]@0.5 1 1 [1 1] [1 1] ~ [1]@0.5"


$: s("hh").struct(rit_pat).slow(2).gain(".7 .3 .4").delay(".7 .3 .4").o(1).pan(rand)
$: s('bd').struct("1 ~ [1 1]? ~").gain("[.3 ~ [.1 .2] ~]").o(1).room(2).pan(rand)


$: note(`<
[c3 ~ d3 f3 e3 ~ c4]
[c3 ~ d3 f3 e3 ~ d4]
>`).sound("sine").trans(-12)
  .struct(rit_pat).slow(2)
  .room(2).lpf(100).o(2).fm(0)
  ._scope()

$: n("<1 [3 5] ~ 0 [3 3] 1>".add(rand.range(-2, 2))).scale("c5: major")
  .sound("square")
  .lpenv("<4 2 1 2 4>*2").lpf(500).delay(".7 .3 .4")
  .o(3).gain(.5).detune(rand)
  ._pianoroll()

 $: n("0 [2 ~] 0 [8 4]").scale("c2:major").sound("sawtooth")
   .lpf(1000).adsr(".7:.1:1:.2")
   .o(4).delay(.25).duck(4).duckdepth(.8)
   ._scope()

$: n("0 [2 ~] 0 [8 4]").scale("c2:major").sound("sawtooth").slow(4)
  .lpf(500).adsr(".5:.1:1:.4")
  .delay(.5).room(4)
  .o(4).duck(4).duckdepth(.8)
  ._scope()
