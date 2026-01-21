// "First Bake" @by phrbmr
// @deatils first exercise on using Strudel


$drumms: s(`<
[bd bd ~ ~ ~ ~ ~ bd  ~ ~ bd bd  ~ ~ ~ ~],
[~ ~ ~ ~ sd ~ ~ ~ ~ ~ ~ ~ sd ~ ~ ~],
[hh ~ hh ~ hh ~ hh ~ hh ~ hh ~ hh ~ hh ~ ]
>`)
  .bank("bossdr110").dec("<.4 .2 .8 .2 .4 .2>")
  .lpf("[1000 2000 <4000 6000>]").room(sine.range(0.5, 1.))
  .orbit(1).pan(rand)//.hush()

// Piano //
$piano: note(`<
[48 55 50 ~]
[48 55 50 ~]*2
>`).gain(sine.range(0.2, 0.8)).delay(.5)//.hush()

// Bass //
$bass: note(`<
[36 ~ 36 40]
[36 36 40 40]
>`).sound("gm_contrabass").adsr(".4:.2:.5:.4")//.hush()


$ambience: n(`<
[6 4 2 0]*2
[8 6 4 2]*2
[7 6 8 4]*2
[6 4 3 2]*2
>`).scale("C:Major").gain(sine).adsr(".8:.1:.5:.1").sound("<square>")
  .lpf("[1000 2000 <4000 6000>]").jux(rev).delay(.5).pan(sine).orbit(2)