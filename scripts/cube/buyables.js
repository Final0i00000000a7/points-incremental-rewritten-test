function buyCubeBab(id) {
  switch (id) {
    case 0:
      if (player.cube.points.lt(tmp.cube.babCost1)) return
      player.cube.points = player.cube.points.sub(tmp.cube.babCost1)
      player.cube.buyables[0] = player.cube.buyables[0].add(1)
  }
}