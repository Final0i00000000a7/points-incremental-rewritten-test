function cube_reset() {
  square_reset()
  let keptlist = [4,15]
  let keptchal = []
  if (hasUpgupg(2)) {
    if (player.cube.upgrades.length >= 2) keptlist.push(1,2,3)
    if (player.cube.upgrades.length >= 3) keptlist.push(5,6,8)
    if (player.cube.upgrades.length >= 4) keptlist.push(9,10,11,12,13,14)
  }
  if (hasUpgupg(4)) keptchal = [1,2,3,4,5]
  player.square = {
    points: E(0),
    unl: true,
    total: E(0),
    times: E(0),
    best: E(0),
    upgrades: keptlist,
    chals: keptchal,
    resetTime: E(0),
  }
  player.pmp = {
    fromsquare: E(0), //因式分解
    fromsquare: E(0), //因式分解
    frompoints: E(0), //同底相乘
    fromsqrt:   E(0), //四次乘方
    transPoint: E(0),
    transCrystal: E(0),
    buyables: [null,E(0),E(0),E(0)],
  }
}

function cube() {
  if(player.square.points.lt("1e1729")) return
  player.cube.points = player.cube.points.add(tmp.cube.gainNorm)
  player.cube.dis = player.cube.dis.add(tmp.cube.gainDis)
  player.cube.upg = player.cube.upg.add(tmp.cube.gainUpg)
  cube_reset()
  if (!hasUpgupg(1)) player.canautodim = false
  player.cube.unl = true
  if (hasUpgupg(1)) player.square.points = player.square.points.clampMin(tmp.cube.upgupgeff[1])
  if (hasUpgupg(1)) player.square.total = player.square.total.clampMin(tmp.cube.upgupgeff[1])
  player.sqrt.points = E(1)
  player.sqrt.galaxies = E(1)
}
function updateCube() {
  player.cube.fractals = player.cube.fractals.add(tmp.cube.babEff1.div(30).mul(player.timeSpeed))
}