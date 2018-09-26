module.exports = function QuickGG(mod) {
  const Vec3 = require('tera-vec3')

  mod.hook('S_SPAWN_ME', 3, event => {
    if (mod.game.me.zone == 9713) {
      event.loc = new Vec3(52229.47265625, 116954.140625, 4303.328125)
      event.w = 1.5

      process.nextTick(() => {
        mod.send('C_PLAYER_LOCATION', 5, {
          loc: event.loc,
          w: event.w,
          lookDirection: 0,
          dest: event.loc,
          type: 7,
          jumpDistance: 0,
          inShuttle: 0,
          time: 0
        })
      })

      return true
    }
  })
}