module.exports = function Quick(mod) {
  const Vec3 = require('tera-vec3')

  mod.hook('S_SPAWN_ME', 3, event => {
    if (mod.game.me.zone == 9713) {
      event.loc = new Vec3({ x: 52229.47265625, y: 116954.140625, z: 4303.328125 })
      event.w = 1.5
      return true
    }
  })
}