function buyUpgupg(id) {
  switch (id) {
    case 1:
      if (player.cube.upg.lt(2) || hasUpgupg(1)) return
      player.cube.upg = player.cube.upg.sub(2)
      player.cube.upgrades.push(1)
      break
    case 2:
      if (player.cube.upg.lt(10) || hasUpgupg(2)) return
      player.cube.upg = player.cube.upg.sub(10)
      player.cube.upgrades.push(2)
      break
    case 3:
      if (player.cube.upg.lt(100) || hasUpgupg(3)) return
      player.cube.upg = player.cube.upg.sub(100)
      player.cube.upgrades.push(3)
      break
    case 4:
      if (player.cube.upg.lt(400) || hasUpgupg(4)) return
      player.cube.upg = player.cube.upg.sub(400)
      player.cube.upgrades.push(4)
      break
  }
}
function hasUpgupg(id) {
  return player.cube.upgrades.includes(id)
}