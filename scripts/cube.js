function cube_reset() {
  square_reset()
  player.square = {
    points: E(0),
    unl: true,
    total: E(0),
    times: E(0),
    best: E(0),
    upgrades: [4,15],
    chals: [],
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
  player.cube.dis = player.cube.points.add(tmp.cube.gainDis)
  player.cube.upg = player.cube.points.add(tmp.cube.gainUpg)
  cube_reset()
  player.canautodim = false
  player.cube.unl = true
}