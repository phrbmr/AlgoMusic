// "Background music 1" @by phrbmr
// @details made for the Brainless Music Jam


setcpm(120/4)

let DRUM = stack(
  s(`<
  [hh - [oh hh] <- hh>]!3
  [hh - <hh [hh hh - hh]> <- [hh hh - hh]>]
  >`)
  .bank("tr909").decay(.1)
  .gain(.15).room(2).lpf(perlin.range(2000, 5000).slow(8))
  .pan(sine.range(.1, .9).slow(2))
  .delay(.25).orbit(1).noise("brown"),
  s(`<
  [-*4]
  [- sd - -]
  [- [sd sd] - -],
  [rim - rim -]
  [-*4]
  [[- rim] - - [rim -]]
  >`)
  .bank("tr909").decay(.1)
  .gain(.05).room(2).roomsize(4).lpf(perlin.range(100, 4000).slow(8))
  .pan(sine.range(.1, .9).slow(2))
  .delay(.25).orbit(0).noise("brown")
)


let amb_progression = `<
[<0 2 3 4>]!3
[<0 1 2 4>!2 <[5 2 2] 3> <2 4>]
>`


let AMBIENCE = n(amb_progression.add(rand.rangex(.1,.5).fast(4)))
  .sound("sine").scale("d2:minor")
  .fm(2).fmattack(.9).lpf(sine.range(1000, 2000).fast(4)).hpf(sine.range(0,100).fast(4))
  .room(2).roomsize(1.3).orbit(2).gain(.25)
  .pan(".2, .8")
  .attack(.2).penv(sine.range(0, -10).slow(8))

  
let BASS = n("<[0 - - 0] [0 - <0 [- 0]> 0]>")
  .gain(.5)
  .sound("square").scale("d2:minor").lpf(slider(500, 0, 10000, 1))
  .delay(.5)
  .strans(amb_progression.fast(2)).pan(rand.range(.3, .7).fast(2))


let MELODY_1 = n("<0 - 5 - 3 - 4 ->*4".sometimesBy(.1, x=>x.add([6|12])).rib(0, 8))
  .sound("sine").scale("<d3:minor d3:dorian>")//.palindrome().jux(rev)
  .delay(.25).orbit(3)

let MELODY_2 = n("<[0 2] [5 7] [3 1] [4 2]>*4".sometimesBy(.1, x=>x.add([6|12])).rib(0, 8))
  .sound("sine").scale("<d3:minor d3:dorian>").palindrome().jux(rev)
  .delay(.25).orbit(3)



// ############### Arrange
$: arrange(
  [8, stack(AMBIENCE).color("black")],
  [8, stack(AMBIENCE, DRUM).color("blue")],
  [8, stack(AMBIENCE, DRUM, BASS).color("green")],
  [8, stack(AMBIENCE, DRUM, BASS, MELODY_1).color("yellow")],
  [8, stack(AMBIENCE, DRUM, BASS, MELODY_2).color("gold")],
  [8, stack(AMBIENCE, DRUM, BASS, MELODY_1).color("yellow")],
  [8, stack(AMBIENCE, DRUM, BASS, MELODY_1, MELODY_2).color("white")],
  [8, stack(AMBIENCE, DRUM, BASS, MELODY_2).color("orange")],
  [8, stack(AMBIENCE, DRUM, BASS).color("green")],
  [8, stack(AMBIENCE).color("black")],
  [8, stack(silence)]
)



// ############### Hydra
await initHydra()
shape(2, .3, [.1, 1].smooth())
  .repeat(10,10).rotate(Math.PI/2).color([.7, .2].smooth(), [.7, .4].smooth(), .1)
  .add(noise(3))
  .out(o0)

osc(10).pixelate(1000).blend(gradient(120))
  .out(o1)

shape([3,10].smooth(), .3, .1)
  .repeat(2, 2).rotate([0, Math.PI*4].smooth().fast(0.1))
  .color(.7, .7, .2).colorama([0.01, 0.1].smooth().fast(.1)).repeat(3, 1)
  .blend(
    shape([10,3].smooth(), .3, .1).rotate([0, -Math.PI*4].smooth().fast(0.2))
    .color(.8, .7, .2).colorama([0.01, 0.1].smooth().fast(.1))
  ).out(o2)


src(o0).mask(o1).diff(o2).out(o3)

render(o3)
