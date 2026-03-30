// "Background music 2" @by phrbmr
// @details made for the Brainless Music Jam

setcpm(120/4)

let hats = s(`<
hh(5, 7):[0 1] [hh hh] hh(7, 7):[0 1] [hh*<14 7>],
oh(3,7):[3 1] oh(3,7):[3 1] oh(5,7):[3 1]
>`)
  .lpf(sine.range(1000, 3000).slow(4))
  .delay(.05)
  .orbit(1)
  ._punchcard()


let saw = n(`<
[0@7][-@7]
[4@7][-@7]
[2@7][-@7]
[5@7]<[3@7] [-@7]>
>`)
  .scale("d1:minor").sound("saw")
  .lpf(1000)
  .room(2).roomsize(2)
  .orbit(5)
  ._scope()


let squares = n(`<
[<0 4 3 1> - - - - - -]
[<0 4 3 1> - <- 5 -> <- 3 -> <1 - -> <5 - -> -]
[<0 4 3 1> <7 - -> <- 5 -> <- 3 -> <1 - -> <5 - -> <7 - 9>]
>`).scale("d3:minor")
  .sound("square").gain(.25).delay(.25)
  .partials("[1, 0, 1, .1, .5, .1, .5,.1]")
  .fm(sine.range(2, 4)).attack(.5)
  //.jux(rev)
  .orbit(2)
  ._scope()


let triangles = n(`<
[0 - - - - - -]
[- 0 - - - - -]
[- - 0 - - - -]
[- - - 0 - - -]
[- - - - 0 - -]
[- - - - - 0 -]
[- - - - - - 0]
>`.add(rand.range(-6, 6).rib(4, 20)))
  .scale("d2:minor").sound("triangle")
  .fm(10).fmattack(.5).fmenv(4).delay(.1)
  .partials("[0, 0, 0, .1, .5, .1, .5,.1]")
  .sustain(1)
  .pan(rand.range(.1, .9)).gain(.25)
  .orbit(4)
  ._scope()
  

let sines = n(`<
[[0, 2]@2 - - - [4, 6]@2]
[[0, 1]@2 - - - [4, 7]@2],
[-*7]@8
[- 0 - 5 - - -]
[6 - 4 3 - [2]*4 -]
[- 0 - 5 - - -]
[6 - 4 3 - <3*4 7*4 9*4> -]
>`)
  .scale("d4:minor").sound("sine")
  .gain(.75)
  .fm(2).fmattack(.3).fmenv(4)
  .lpf(sine.range(500, 1000))
  .delay(.1)
  .orbit(3).room(2)
  ._pianoroll()



let piano = n(run(12))
  .palindrome().scale("<d3 d4>:minor").sound("sine").cut(1)
  .decay(.1).delay(.1).swingBy(1/7, 5)
  .hpf(100)
  .jux(rev).room(2).orbit(6)
  .gain(sine.range(.25, .5).slow(4))
  //.tremolo(2)
  //.mask("<1@4 0@4>")
  ._scope()


// ############### Compose
$: arrange(
  [4, stack(hats).color("aqua")],
  [8, stack(hats,saw).color("brown")],
  [8, stack(hats, saw, squares).color("black")],
  [16, stack(hats, saw, squares, triangles).color("indigo")],
  [8, stack(hats, saw, squares, triangles, sines).color("gold")],
  [8, stack(hats, saw, squares, triangles, piano).color("maroon")],
  [32, stack(hats, saw, squares, triangles, sines, piano).color("lightcoral")],
  [8, stack(hats, saw, squares, triangles, piano).color("maroon")],
  [8, stack(hats, saw, squares, triangles, piano).color("magenta")],
  [8, stack(hats, saw, squares, piano).color("orangered")],
  [8, stack(hats, saw, squares, piano).color("navy")],
  [8, stack(saw, squares, piano).color("olive")],
  [8, stack(saw, squares).color("olive")]
)


// ############### Hydra
await initHydra()
shape(2, .3, [.1, 1].smooth())
  .repeat(10,10).rotate(Math.PI/2).color([.1, .3].smooth(), [.2, .4].smooth(), .1)
  .add(noise(3))
  .out(o0)

osc(10).pixelate(1000).blend(gradient(120))
  .out(o1)

shape(50, .3, .1)
  .repeat(2, 2).rotate([0, Math.PI*4].smooth().fast(0.1))
  .color(.4, .1, .2).colorama([0.01, 0.1].smooth().fast(.1))
  .blend(shape(50, .3, .1)
         .color(.4, .1, .2).colorama([0.01, 0.1].smooth().fast(.1)))
  .out(o2)


src(o0).mask(o1).diff(o2).out(o3)

render(o3)


