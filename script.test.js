/**
 * @jest-environment jsdom
 */


// Testing Enviroment set up but having issues exporting module pattern types -- solution suggested is using a revealing module pattern --- and or module.exports.getGame = function (gameId) {
//   return {
//       id: gameId,
//       price: 10
//   };
// }

const mod = require('./script');

const player = mod.Player; 
describe('subtract and add functions', ()=>{
  test('check player.name', () => {
    expect(mod.Player('player-1')).toBe('player-1');});
})  

//dummy code from other


