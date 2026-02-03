// "Promise (reprise)" @by phrbmr
// @details cover from Silent Hell by Akira Yamaoka



setcpm(120/4)


$: n(`
<[0 1 2 3 4 3 2 1] 
[0@2 0 7] 
[5@2] 
[4@1.5 [4 4] 6] 
>`).scale("G3:minor").sound("piano")._pianoroll({ labels: 1 })


$: s("hh").struct("x x x x").gain(.1)
$: s("oh").struct("~ ~ ~ x").gain(.1)


// Hydra
await initHydra()