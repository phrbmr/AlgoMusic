
// "Background music 3" @by phrbmr
// @details made for the Brainless Music Jam

setcpm(130/4)

let drum = stack (
  s(`<
hh(3, 5) hh(2, 5) hh(5,5),
oh(3,5,1) oh(2,5,1) oh(1, 5),
cr(0, 5) cr(0, 5) [cr(1, 5, 4):1]?
>`.slow("<2!3 1>"))
  .lpf(sine.range(1000, 3000).slow(8))
  .gain(.75).pan(perlin.range(.25, .75).fast(2))
  .delay(.05)
  .orbit(1).room(2)
  ._punchcard(),
  s(`<
rim(5, 5) rim(3,5) rim(2,5)
>`.slow("<1 2!3>"))
  .lpf(sine.range(1000, 3000).slow(8))
  .gain(.25).pan(rand)
  .delay(.05)
  .orbit(1)
  ._punchcard()

)


let sines = n(`<
[0 6 3 2 [1 2 3 1]]/2
>`).sound("sine").scale("f#2:minor")
  .orbit(2)


let saws = n(`<
[0 0 - - 0]
[0 0 - - -]
[0 0 - - -]
[0 0 - 0 0]
>`).sound("saw").scale("f#1:minor")
  .gain(.75)
  .strans("<0 6 3 2>/4")
  .fm(4)
  .lpf(1000)
  .orbit(3).room(2).roomsize(2)


let squares = n(`<
[0*2 1*2 2*2 3*2 4*2]
[1*2 2*2 3*2 4*2 5*2]
[3*2 4*2 5*2 6*2 8*2]
[5*2 7*2 4*2 6*2 <1*2 2*2 12*2 11*2 10*2>]
>`).sound("square").scale("f#3:minor")
  .lpf(500)
  .delay(.2)
  .orbit(2).room(sine)
  ._scope()


let triangles = n(`<
 [0 6 - - -][0 - 7 - -][0 8 - - -][0 6 - - -][0 6 - - -]
 [0 - - 9 -][0 - 7 - -][0 8 - - -][0 6 - - -][0 6 - - -]
[0 - - - 12][0 - - 9 -][0 - 7 - -][0 8 - - -][0 6 - - -]
>`).sound("triangle").scale("f#4:minor")
  .lpf(4000)
  .fm(3).fmattack(.3)
  .jux(press)
  ._scope()

// ############### Compose
$: arrange(
  [8, stack(drum).color("black")],
  [8, stack(drum, sines).color("aqua")],
  [8, stack(drum, sines, saws).color("orange")],
  [8, stack(drum, sines, saws, squares).color("green")],
  [8, stack(drum, sines, saws).color("orange")],
  [8, stack(drum, sines, saws, squares.palindrome()).color("green")],
  [8, stack(drum, sines, saws, triangles).color("yellow")],
  [8, stack(drum, sines, saws, triangles, squares).color("white")],
  [12, stack(drum, sines, saws, triangles, squares.palindrome()).color("gold")],
  [12, stack(drum, sines, saws.jux(rev)).color("blue")],
  [8, stack(sines).color("black")],
  [8, silence]
)._scope().punchcard({vertical:true})


// $: stack(
//   drum.color("black"),
//       sines.mask("<0 1 1 1 1 1 1 1 0>/4").color("aqua"),
//        saws.mask("<0 0 1 1 1 1 1 1 0>/4").color("orange"),
//     squares.mask("<0 0 0 1 0 0 0 1 0>/4").color("green"),
//     squares.mask("<0 0 0 0 0 1 0 0 1>/4").palindrome().color("gold"),
//   triangles.mask("<0 0 0 0 0 1 1 1 1>/4").color("blue"),
// )._scope()._punchcard()


// ############### Hydra
await initHydra()
shape(2, .3, [.1, 1].smooth())
  .repeat(10,10).rotate(Math.PI/4).color([.1, .3].smooth(), [.2, .4].smooth(), .1)
  .add(noise(3))
  .out(o0)

osc(10).color(.7, .2, .9).pixelate(1000).blend(gradient(120))
  .out(o1)

shape(50, .3, [0, 1].smooth().fast(2))
  .color(.4, .7, .2).colorama([0.01, 0.1].smooth().fast(.1))
  .blend(shape(50, .3, .1).rotate([0, Math.PI/2].smooth())
         .color(.4, .1, .2).colorama([0.01, 0.1].smooth().fast(.1)))
  .out(o2)


src(o0).mask(o1).diff(o2).out(o3)

render(o3)


