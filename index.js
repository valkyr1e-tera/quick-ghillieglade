module.exports = function QuickGG(mod) {
  const Vec3 = require('tera-vec3')
  let enabled = true

  mod.command.add('qgg', () => {
    enabled = !enabled
    mod.command.message((enabled ? 'en' : 'dis') + 'abled');
  });

  mod.hook('S_SPAWN_ME', 3, event => {    
    if (enabled && mod.game.me.zone === 9713) {
      event.loc = new Vec3(52229.47265625, 116954.140625, 4303.328125)
      event.w = 1.5

      mod.send('S_SPAWN_ME', 3, event)
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

      return false
    }
  })
}