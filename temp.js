const tmp={sqrt:{get dim_eff(){return window[map+1].player.sqrt.points.add(1).log10().add(1).pow(2)},get galCost(){return E(10).pow(E(100).add(E(50).mul(window[map+1].player.sqrt.galaxies)))}}};