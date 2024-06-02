function replicateSqrtPoints() {
  if (window[map+1].player.sqrt.unl) window[map+1].player.sqrt.points = window[map+1].player.sqrt.points.mul(tmp.sqrt.replicatePerTick)
  if (tmp.sqrt.isCapped) window[map+1].player.sqrt.points = E(1e100)
}

function galaxy() {
  if (window[map+1].player.sqrt.galaxies.lt(1)) {
    if (!confirm('你真的要重置吗?')) return
  }
  if (window[map+1].player.sqrt.points.lt(tmp.sqrt.galCost)) return
  galaxy_reset()
  window[map+1].player.sqrt.galaxies = window[map+1].player.sqrt.galaxies.add(1)
}
function galaxy_reset() {
  window[map+1].player.dims = dims
  window[map+1].player.points = E(10)
  window[map+1].player.sqrt.points = E(1)
}

const galaxy_rewards = [
  {
    req: E(1),
    desc: "移除复制器硬上限，购买维度不再花费点数，你可以购买小数个维度"
  },
  {
    req: E(2),
    desc: "自动购买维度",
  },
  {
    req: E(3),
    desc: "解锁点数<sup>2</sup>",
  }
]