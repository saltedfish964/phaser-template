require('./js/libs/weapp-adapter')
require('./js/libs/symbol')

window.PIXI = require('./js/libs/pixi.min')
window.p2 = require('./js/libs/p2.min')
window.Phaser = require('./js/libs/phaser-split.min')

function preload() {
  console.log('preload')
}

function create() {
  console.log('create')
}

new Phaser.Game(
  canvas.width, 
  canvas.height, 
  Phaser.AUTO, 
  '', 
  { 
    preload: preload, 
    create: create,
  }
)