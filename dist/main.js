/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// const GameView = require(\"./scripts/game_view\")\nconst Game = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n\nconst canvas = document.getElementById('canvas'); //canvas setup\n\nconst ctx = canvas.getContext('2d'); //allow us to use built in canvas methods\n\ncanvas.width = 500;\ncanvas.height = 300;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // const main = document.getElementById('main')\n  console.log('Ampe!!!');\n  document.getElementById('start-button').addEventListener('click', function () {\n    console.log('clcicked');\n    const numberOfPlayers = prompt('Please enter your number of players');\n    const game = new Game(ctx, numberOfPlayers);\n    game.drawGame(); // console.log('You entered ', numberOfPlayers)\n    // setUpGameBoard(numberOfPlayers)\n\n    document.getElementById('start-button').disabled = true;\n  });\n});\nlet angle = 0; //make player goes up or down\n\nlet hue = 0;\nlet score = 0;\n\nfunction setUpGameBoard(players = 1) {\n  createPlayers(players, 75);\n  createPlayers(players, 185);\n}\n\nfunction createPlayer(xCoord = 100, yCoord = 75) {\n  //for a single player\n  // ctx.clearRect(0, 0, canvas.width, canvas.height)\n  ctx.strokeRect(0, 0, canvas.width, canvas.height); // ctx.fillRect(20, 200, 100, 100)\n\n  ctx.beginPath();\n  ctx.arc(xCoord, yCoord, 20, 0, 2 * Math.PI);\n  ctx.stroke(); // requestAnimationFrame(animate)\n}\n\nfunction createPlayers(numberOfPlayers, yCoord) {\n  //for multiple players\n  let startingXCoord = 100;\n  const startingYCoord = yCoord || 75;\n\n  for (let i = 0; i < numberOfPlayers; i++) {\n    createPlayer(startingXCoord, startingYCoord);\n    startingXCoord += 75;\n  }\n} // let player = {\n//     x: 300,\n//     y: 300,\n//     width: 20,\n//     height: 20\n//     // x_vel: 0,\n//     // y_vel: 0\n// }\n// ctx.strokeRect(100, 100, 100, -100);\n// ctx.fillStyle = 'rgb(200, 0, 0)';\n// ctx.fillRect(10, 10, 50, 50);\n// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';\n// ctx.fillRect(30, 30, 50, 50);\n// function draw() {\n//     var canvas = document.getElementById('canvas');\n//     if (canvas.getContext) {\n//         var ctx = canvas.getContext('2d');\n//         ctx.fillRect(25, 25, 100, 100);\n//         ctx.clearRect(45, 45, 60, 60);\n//         ctx.strokeRect(50, 50, 50, 50);\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNDb250ZW50IjpbIi8vIGNvbnN0IEdhbWVWaWV3ID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lX3ZpZXdcIilcbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL3NjcmlwdHMvZ2FtZS5qcycpO1xuXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTsgLy9jYW52YXMgc2V0dXBcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpOyAvL2FsbG93IHVzIHRvIHVzZSBidWlsdCBpbiBjYW52YXMgbWV0aG9kc1xuY2FudmFzLndpZHRoID0gNTAwO1xuY2FudmFzLmhlaWdodCA9IDMwMDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG4gICAgY29uc29sZS5sb2coJ0FtcGUhISEnKVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGNpY2tlZCcpXG4gICAgICAgIGNvbnN0IG51bWJlck9mUGxheWVycyA9IHByb21wdCgnUGxlYXNlIGVudGVyIHlvdXIgbnVtYmVyIG9mIHBsYXllcnMnKVxuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4LCBudW1iZXJPZlBsYXllcnMpO1xuICAgICAgICBnYW1lLmRyYXdHYW1lKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdZb3UgZW50ZXJlZCAnLCBudW1iZXJPZlBsYXllcnMpXG4gICAgICAgIC8vIHNldFVwR2FtZUJvYXJkKG51bWJlck9mUGxheWVycylcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KVxufSlcblxuXG5cblxuXG5sZXQgYW5nbGUgPSAwOyAvL21ha2UgcGxheWVyIGdvZXMgdXAgb3IgZG93blxubGV0IGh1ZSA9IDA7IFxubGV0IHNjb3JlID0gMDtcblxuZnVuY3Rpb24gc2V0VXBHYW1lQm9hcmQocGxheWVycyA9IDEpIHtcblxuICAgIGNyZWF0ZVBsYXllcnMocGxheWVycywgNzUpXG4gICAgY3JlYXRlUGxheWVycyhwbGF5ZXJzLCAxODUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllcih4Q29vcmQgPSAxMDAsIHlDb29yZCA9IDc1KXsgLy9mb3IgYSBzaW5nbGUgcGxheWVyXG4gICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgY3R4LnN0cm9rZVJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIC8vIGN0eC5maWxsUmVjdCgyMCwgMjAwLCAxMDAsIDEwMClcbiAgICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh4Q29vcmQsIHlDb29yZCwgMjAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheWVycyhudW1iZXJPZlBsYXllcnMsIHlDb29yZCkgeyAvL2ZvciBtdWx0aXBsZSBwbGF5ZXJzXG4gICAgbGV0IHN0YXJ0aW5nWENvb3JkID0gMTAwXG4gICAgY29uc3Qgc3RhcnRpbmdZQ29vcmQgPSB5Q29vcmQgfHwgNzU7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mUGxheWVyczsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVBsYXllcihzdGFydGluZ1hDb29yZCwgc3RhcnRpbmdZQ29vcmQpO1xuICAgICAgICBzdGFydGluZ1hDb29yZCArPSA3NTtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cbi8vIGxldCBwbGF5ZXIgPSB7XG4vLyAgICAgeDogMzAwLFxuLy8gICAgIHk6IDMwMCxcbi8vICAgICB3aWR0aDogMjAsXG4vLyAgICAgaGVpZ2h0OiAyMFxuXG4vLyAgICAgLy8geF92ZWw6IDAsXG4vLyAgICAgLy8geV92ZWw6IDBcblxuLy8gfVxuXG5cblxuXG5cblxuLy8gY3R4LnN0cm9rZVJlY3QoMTAwLCAxMDAsIDEwMCwgLTEwMCk7XG4vLyBjdHguZmlsbFN0eWxlID0gJ3JnYigyMDAsIDAsIDApJztcbi8vIGN0eC5maWxsUmVjdCgxMCwgMTAsIDUwLCA1MCk7XG5cbi8vIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAyMDAsIDAuNSknO1xuLy8gY3R4LmZpbGxSZWN0KDMwLCAzMCwgNTAsIDUwKTtcblxuLy8gZnVuY3Rpb24gZHJhdygpIHtcbi8vICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuLy8gICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuLy8gICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbi8vICAgICAgICAgY3R4LmZpbGxSZWN0KDI1LCAyNSwgMTAwLCAxMDApO1xuLy8gICAgICAgICBjdHguY2xlYXJSZWN0KDQ1LCA0NSwgNjAsIDYwKTtcbi8vICAgICAgICAgY3R4LnN0cm9rZVJlY3QoNTAsIDUwLCA1MCwgNTApO1xuLy8gICAgIH1cbi8vIH0iXSwibmFtZXMiOlsiR2FtZSIsInJlcXVpcmUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJudW1iZXJPZlBsYXllcnMiLCJwcm9tcHQiLCJnYW1lIiwiZHJhd0dhbWUiLCJkaXNhYmxlZCIsImFuZ2xlIiwiaHVlIiwic2NvcmUiLCJzZXRVcEdhbWVCb2FyZCIsInBsYXllcnMiLCJjcmVhdGVQbGF5ZXJzIiwiY3JlYXRlUGxheWVyIiwieENvb3JkIiwieUNvb3JkIiwic3Ryb2tlUmVjdCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZSIsInN0YXJ0aW5nWENvb3JkIiwic3RhcnRpbmdZQ29vcmQiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Team = __webpack_require__(/*! ./team */ \"./src/scripts/team.js\");\n\nclass Game {\n  ctx;\n  numberOfPlayers;\n\n  constructor(ctx, numberOfPlayers) {\n    this.ctx = ctx;\n    this.numberOfPlayers = numberOfPlayers;\n  }\n\n  startGame() {}\n\n  drawGame() {\n    const teamMatch = new Team(this.numberOfPlayers, 'TEAM_MATCH', this.ctx);\n    const teamUnmatch = new Team(this.numberOfPlayers, 'TEAM_UNMATCH', this.ctx);\n    teamMatch.createPlayers();\n    teamUnmatch.createPlayers();\n  }\n\n  promptUser() {//privides an option of two colors for using to choose one\n    //once user chooses color //prompts user to pick \"Match\" or \"Unmatched\"\n  }\n\n  randomColorGenerator() {//generates a pair of random colors for user to choose from\n  }\n\n} //Random color generator\n//Startgame - prompt user to eneter number of players -> class team\n//Round # --> choose color for active player --> disable color --> start countdonw --> bounce? -- > reveeal --> print score\n//timer\n//gameOver --> when dead player === teamSize\n//puts Player #{name} wins\n//\n\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFwQjs7QUFDQSxNQUFNQyxJQUFOLENBQVc7QUFDUEMsRUFBQUEsR0FBRztBQUNIQyxFQUFBQSxlQUFlOztBQUdmQyxFQUFBQSxXQUFXLENBQUNGLEdBQUQsRUFBTUMsZUFBTixFQUFzQjtBQUM3QixTQUFLRCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNIOztBQUVERSxFQUFBQSxTQUFTLEdBQUUsQ0FFVjs7QUFFREMsRUFBQUEsUUFBUSxHQUFFO0FBQ1QsVUFBTUMsU0FBUyxHQUFHLElBQUlSLElBQUosQ0FBUyxLQUFLSSxlQUFkLEVBQStCLFlBQS9CLEVBQTZDLEtBQUtELEdBQWxELENBQWxCO0FBQ0EsVUFBTU0sV0FBVyxHQUFHLElBQUlULElBQUosQ0FBUyxLQUFLSSxlQUFkLEVBQStCLGNBQS9CLEVBQStDLEtBQUtELEdBQXBELENBQXBCO0FBQ0FLLElBQUFBLFNBQVMsQ0FBQ0UsYUFBVjtBQUNBRCxJQUFBQSxXQUFXLENBQUNDLGFBQVo7QUFDQTs7QUFFREMsRUFBQUEsVUFBVSxHQUFFLENBQ1I7QUFDQTtBQUNIOztBQUVEQyxFQUFBQSxvQkFBb0IsR0FBRSxDQUNsQjtBQUNIOztBQTVCTSxDLENBK0JYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWtCWixJQUFsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2FtcGVfanMvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVGVhbSA9IHJlcXVpcmUoJy4vdGVhbScpIFxuY2xhc3MgR2FtZSB7XG4gICAgY3R4O1xuICAgIG51bWJlck9mUGxheWVycztcblxuXG4gICAgY29uc3RydWN0b3IoY3R4LCBudW1iZXJPZlBsYXllcnMpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5udW1iZXJPZlBsYXllcnMgPSBudW1iZXJPZlBsYXllcnM7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCl7XG5cbiAgICB9O1xuXG4gICAgZHJhd0dhbWUoKXtcbiAgICAgY29uc3QgdGVhbU1hdGNoID0gbmV3IFRlYW0odGhpcy5udW1iZXJPZlBsYXllcnMsICdURUFNX01BVENIJywgdGhpcy5jdHggKTtcbiAgICAgY29uc3QgdGVhbVVubWF0Y2ggPSBuZXcgVGVhbSh0aGlzLm51bWJlck9mUGxheWVycywgJ1RFQU1fVU5NQVRDSCcsIHRoaXMuY3R4KTtcbiAgICAgdGVhbU1hdGNoLmNyZWF0ZVBsYXllcnMoKTtcbiAgICAgdGVhbVVubWF0Y2guY3JlYXRlUGxheWVycygpO1xuICAgIH1cbiAgICBcbiAgICBwcm9tcHRVc2VyKCl7XG4gICAgICAgIC8vcHJpdmlkZXMgYW4gb3B0aW9uIG9mIHR3byBjb2xvcnMgZm9yIHVzaW5nIHRvIGNob29zZSBvbmVcbiAgICAgICAgLy9vbmNlIHVzZXIgY2hvb3NlcyBjb2xvciAvL3Byb21wdHMgdXNlciB0byBwaWNrIFwiTWF0Y2hcIiBvciBcIlVubWF0Y2hlZFwiXG4gICAgfVxuXG4gICAgcmFuZG9tQ29sb3JHZW5lcmF0b3IoKXtcbiAgICAgICAgLy9nZW5lcmF0ZXMgYSBwYWlyIG9mIHJhbmRvbSBjb2xvcnMgZm9yIHVzZXIgdG8gY2hvb3NlIGZyb21cbiAgICB9XG5cbn1cbi8vUmFuZG9tIGNvbG9yIGdlbmVyYXRvclxuLy9TdGFydGdhbWUgLSBwcm9tcHQgdXNlciB0byBlbmV0ZXIgbnVtYmVyIG9mIHBsYXllcnMgLT4gY2xhc3MgdGVhbVxuLy9Sb3VuZCAjIC0tPiBjaG9vc2UgY29sb3IgZm9yIGFjdGl2ZSBwbGF5ZXIgLS0+IGRpc2FibGUgY29sb3IgLS0+IHN0YXJ0IGNvdW50ZG9udyAtLT4gYm91bmNlPyAtLSA+IHJldmVlYWwgLS0+IHByaW50IHNjb3JlXG4vL3RpbWVyXG4vL2dhbWVPdmVyIC0tPiB3aGVuIGRlYWQgcGxheWVyID09PSB0ZWFtU2l6ZVxuLy9wdXRzIFBsYXllciAje25hbWV9IHdpbnNcbi8vXG5cbm1vZHVsZS5leHBvcnRzICA9IEdhbWU7Il0sIm5hbWVzIjpbIlRlYW0iLCJyZXF1aXJlIiwiR2FtZSIsImN0eCIsIm51bWJlck9mUGxheWVycyIsImNvbnN0cnVjdG9yIiwic3RhcnRHYW1lIiwiZHJhd0dhbWUiLCJ0ZWFtTWF0Y2giLCJ0ZWFtVW5tYXRjaCIsImNyZWF0ZVBsYXllcnMiLCJwcm9tcHRVc2VyIiwicmFuZG9tQ29sb3JHZW5lcmF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(module) {

eval("const STATUS_TYPES = {\n  //enum\n  ACTIVE: 'ACTIVE',\n  INACTIVE: 'INACTIVE',\n  DEAD: 'DEAD'\n};\n\nclass Player {\n  pos;\n  color;\n  status;\n  ctx; // tie this canvas to the window instead of passing it down each time \n\n  xCoord; // xpositionm\n\n  yCoord; // y position\n\n  constructor(pos, ctx, xCoord, yCoord) {\n    this.pos = pos, this.color = color, this.status = STATUS_TYPES.INACTIVE;\n    this.xCoord = xCoord;\n    this.yCoord = yCoord;\n    this.ctx = ctx;\n  }\n\n  isDead() {\n    return this.status === STATUS_TYPES.DEAD;\n  }\n\n  renderMove() {\n    return this.color;\n  }\n\n  setStatus(status) {\n    this.status = STATUS_TYPES[status];\n  }\n\n  drawPlayer() {\n    // this.ctx.strokeRect(0, 0, canvas.width, canvas.height)\n    // ctx.fillRect(20, 200, 100, 100)\n    this.ctx.beginPath();\n    this.ctx.arc(this.xCoord, this.yCoord, 20, 0, 2 * Math.PI);\n    this.ctx.stroke();\n  }\n\n}\n\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbXBlX2pzLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwibmFtZXMiOlsiU1RBVFVTX1RZUEVTIiwiQUNUSVZFIiwiSU5BQ1RJVkUiLCJERUFEIiwiUGxheWVyIiwicG9zIiwiY29sb3IiLCJzdGF0dXMiLCJjdHgiLCJ4Q29vcmQiLCJ5Q29vcmQiLCJjb25zdHJ1Y3RvciIsImlzRGVhZCIsInJlbmRlck1vdmUiLCJzZXRTdGF0dXMiLCJkcmF3UGxheWVyIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsWUFBWSxHQUFHO0FBQUU7QUFDbkJDLEVBQUFBLE1BQU0sRUFBRyxRQURRO0FBRWpCQyxFQUFBQSxRQUFRLEVBQUUsVUFGTztBQUdqQkMsRUFBQUEsSUFBSSxFQUFFO0FBSFcsQ0FBckI7O0FBTUEsTUFBTUMsTUFBTixDQUFhO0FBQ1RDLEVBQUFBLEdBQUc7QUFDSEMsRUFBQUEsS0FBSztBQUNMQyxFQUFBQSxNQUFNO0FBQ05DLEVBQUFBLEdBQUcsQ0FKTSxDQUlKOztBQUNMQyxFQUFBQSxNQUFNLENBTEcsQ0FLRjs7QUFDUEMsRUFBQUEsTUFBTSxDQU5HLENBTUY7O0FBRVBDLEVBQUFBLFdBQVcsQ0FBQ04sR0FBRCxFQUFLRyxHQUFMLEVBQVdDLE1BQVgsRUFBbUJDLE1BQW5CLEVBQTBCO0FBQ2pDLFNBQUtMLEdBQUwsR0FBV0EsR0FBWCxFQUNBLEtBQUtDLEtBQUwsR0FBYUEsS0FEYixFQUVBLEtBQUtDLE1BQUwsR0FBY1AsWUFBWSxDQUFDRSxRQUYzQjtBQUdBLFNBQUtPLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVESSxFQUFBQSxNQUFNLEdBQUU7QUFDSixXQUFPLEtBQUtMLE1BQUwsS0FBZ0JQLFlBQVksQ0FBQ0csSUFBcEM7QUFDSDs7QUFDRFUsRUFBQUEsVUFBVSxHQUFFO0FBQ1IsV0FBTyxLQUFLUCxLQUFaO0FBRUg7O0FBRURRLEVBQUFBLFNBQVMsQ0FBQ1AsTUFBRCxFQUFRO0FBQ2IsU0FBS0EsTUFBTCxHQUFjUCxZQUFZLENBQUNPLE1BQUQsQ0FBMUI7QUFDSDs7QUFFRFEsRUFBQUEsVUFBVSxHQUFHO0FBQ1Q7QUFDQTtBQUVBLFNBQUtQLEdBQUwsQ0FBU1EsU0FBVDtBQUNBLFNBQUtSLEdBQUwsQ0FBU1MsR0FBVCxDQUFhLEtBQUtSLE1BQWxCLEVBQTBCLEtBQUtDLE1BQS9CLEVBQXVDLEVBQXZDLEVBQTJDLENBQTNDLEVBQThDLElBQUlRLElBQUksQ0FBQ0MsRUFBdkQ7QUFDQSxTQUFLWCxHQUFMLENBQVNZLE1BQVQ7QUFDSDs7QUFwQ1E7O0FBd0NiQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJsQixNQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgU1RBVFVTX1RZUEVTID0geyAvL2VudW1cbiAgICBBQ1RJVkUgOiAnQUNUSVZFJyxcbiAgICBJTkFDVElWRTogJ0lOQUNUSVZFJyxcbiAgICBERUFEOiAnREVBRCdcbn1cblxuY2xhc3MgUGxheWVyIHtcbiAgICBwb3M7XG4gICAgY29sb3I7XG4gICAgc3RhdHVzO1xuICAgIGN0eDsgLy8gdGllIHRoaXMgY2FudmFzIHRvIHRoZSB3aW5kb3cgaW5zdGVhZCBvZiBwYXNzaW5nIGl0IGRvd24gZWFjaCB0aW1lIFxuICAgIHhDb29yZCAvLyB4cG9zaXRpb25tXG4gICAgeUNvb3JkIC8vIHkgcG9zaXRpb25cbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwb3MsY3R4LCAgeENvb3JkLCB5Q29vcmQpe1xuICAgICAgICB0aGlzLnBvcyA9IHBvcyxcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yLFxuICAgICAgICB0aGlzLnN0YXR1cyA9IFNUQVRVU19UWVBFUy5JTkFDVElWRTtcbiAgICAgICAgdGhpcy54Q29vcmQgPSB4Q29vcmQ7XG4gICAgICAgIHRoaXMueUNvb3JkID0geUNvb3JkO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG4gICAgXG4gICAgaXNEZWFkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gU1RBVFVTX1RZUEVTLkRFQUQ7XG4gICAgfVxuICAgIHJlbmRlck1vdmUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3I7XG5cbiAgICB9XG5cbiAgICBzZXRTdGF0dXMoc3RhdHVzKXtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBTVEFUVVNfVFlQRVNbc3RhdHVzXTtcbiAgICB9XG5cbiAgICBkcmF3UGxheWVyKCkge1xuICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2VSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDIwLCAyMDAsIDEwMCwgMTAwKVxuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54Q29vcmQsIHRoaXMueUNvb3JkLCAyMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL3BsYXllci5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/team.js":
/*!*****************************!*\
  !*** ./src/scripts/team.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Player = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\nconst TEAM_TYPE = {\n  TEAM_MATCH: 'TEAM_MATCH',\n  TEAM_UNMATCH: 'TEAM_UNMATCH'\n};\n\nclass Team {\n  //list of players\n  //type of string - match adn unamtch\n  //isDead?()\n  //two teams : Team A, Team B\n  players;\n  teamType;\n  numberOfPlayers;\n  ctx;\n\n  constructor(numberOfPlayers, teamType, ctx) {\n    this.numberOfPlayers = numberOfPlayers;\n    this.teamType = teamType;\n    this.players = [];\n    this.ctx = ctx;\n  }\n\n  getTeamYCoord() {\n    const startingMatchYCoord = 75;\n    const startingUnmatchYCoord = 185;\n    return this.teamType === TEAM_TYPE.TEAM_MATCH ? startingMatchYCoord : startingUnmatchYCoord;\n  }\n\n  createPlayers() {\n    const startingXCoord = 100;\n\n    for (let i = 0; i < this.numberOfPlayers; i++) {\n      const currentPlayer = new Player(i, this.ctx, startingXCoord, this.getTeamYCoord());\n      currentPlayer.drawPlayer();\n      startingXCoord += 75; // startingX,\n      // yCoord\n      // some color\n    }\n  }\n\n}\n\nmodule.exports = Team;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90ZWFtLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyx5Q0FBRCxDQUF0Qjs7QUFDQSxNQUFNQyxTQUFTLEdBQUc7QUFDZEMsRUFBQUEsVUFBVSxFQUFFLFlBREU7QUFFZEMsRUFBQUEsWUFBWSxFQUFFO0FBRkEsQ0FBbEI7O0FBS0EsTUFBTUMsSUFBTixDQUFXO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFHQUMsRUFBQUEsT0FBTztBQUNQQyxFQUFBQSxRQUFRO0FBQ1JDLEVBQUFBLGVBQWU7QUFDZkMsRUFBQUEsR0FBRzs7QUFDSEMsRUFBQUEsV0FBVyxDQUFDRixlQUFELEVBQWtCRCxRQUFsQixFQUE0QkUsR0FBNUIsRUFBaUM7QUFDeEMsU0FBS0QsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxTQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtELE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0csR0FBTCxHQUFXQSxHQUFYO0FBQ0g7O0FBRURFLEVBQUFBLGFBQWEsR0FBRztBQUNaLFVBQU1DLG1CQUFtQixHQUFHLEVBQTVCO0FBQ0EsVUFBTUMscUJBQXFCLEdBQUcsR0FBOUI7QUFDQSxXQUFPLEtBQUtOLFFBQUwsS0FBa0JMLFNBQVMsQ0FBQ0MsVUFBNUIsR0FBeUNTLG1CQUF6QyxHQUErREMscUJBQXRFO0FBQ0g7O0FBRURDLEVBQUFBLGFBQWEsR0FBRztBQUNaLFVBQU1DLGNBQWMsR0FBRyxHQUF2Qjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1IsZUFBekIsRUFBMENRLENBQUMsRUFBM0MsRUFBK0M7QUFDM0MsWUFBTUMsYUFBYSxHQUFHLElBQUlqQixNQUFKLENBQVdnQixDQUFYLEVBQWMsS0FBS1AsR0FBbkIsRUFBd0JNLGNBQXhCLEVBQXdDLEtBQUtKLGFBQUwsRUFBeEMsQ0FBdEI7QUFDQU0sTUFBQUEsYUFBYSxDQUFDQyxVQUFkO0FBQ0FILE1BQUFBLGNBQWMsSUFBSSxFQUFsQixDQUgyQyxDQUkzQztBQUNBO0FBQ0E7QUFFSDtBQUNKOztBQW5DTTs7QUF1Q1hJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmYsSUFBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbXBlX2pzLy4vc3JjL3NjcmlwdHMvdGVhbS5qcz9iNGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5jb25zdCBURUFNX1RZUEUgPSB7XG4gICAgVEVBTV9NQVRDSDogJ1RFQU1fTUFUQ0gnLFxuICAgIFRFQU1fVU5NQVRDSDogJ1RFQU1fVU5NQVRDSCdcbn07XG5cbmNsYXNzIFRlYW0ge1xuICAgIC8vbGlzdCBvZiBwbGF5ZXJzXG4gICAgLy90eXBlIG9mIHN0cmluZyAtIG1hdGNoIGFkbiB1bmFtdGNoXG4gICAgLy9pc0RlYWQ/KClcbiAgICAvL3R3byB0ZWFtcyA6IFRlYW0gQSwgVGVhbSBCXG5cblxuICAgIHBsYXllcnM7XG4gICAgdGVhbVR5cGU7XG4gICAgbnVtYmVyT2ZQbGF5ZXJzO1xuICAgIGN0eDsgICAgXG4gICAgY29uc3RydWN0b3IobnVtYmVyT2ZQbGF5ZXJzLCB0ZWFtVHlwZSwgY3R4KSB7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZQbGF5ZXJzID0gbnVtYmVyT2ZQbGF5ZXJzO1xuICAgICAgICB0aGlzLnRlYW1UeXBlID0gdGVhbVR5cGU7XG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG5cbiAgICBnZXRUZWFtWUNvb3JkKCkge1xuICAgICAgICBjb25zdCBzdGFydGluZ01hdGNoWUNvb3JkID0gNzU7XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nVW5tYXRjaFlDb29yZCA9IDE4NTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVhbVR5cGUgPT09IFRFQU1fVFlQRS5URUFNX01BVENIID8gc3RhcnRpbmdNYXRjaFlDb29yZCA6IHN0YXJ0aW5nVW5tYXRjaFlDb29yZDtcbiAgICB9XG5cbiAgICBjcmVhdGVQbGF5ZXJzKCkge1xuICAgICAgICBjb25zdCBzdGFydGluZ1hDb29yZCA9IDEwMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mUGxheWVyczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGxheWVyID0gbmV3IFBsYXllcihpLCB0aGlzLmN0eCwgc3RhcnRpbmdYQ29vcmQsIHRoaXMuZ2V0VGVhbVlDb29yZCgpKTtcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIuZHJhd1BsYXllcigpO1xuICAgICAgICAgICAgc3RhcnRpbmdYQ29vcmQgKz0gNzU7XG4gICAgICAgICAgICAvLyBzdGFydGluZ1gsXG4gICAgICAgICAgICAvLyB5Q29vcmRcbiAgICAgICAgICAgIC8vIHNvbWUgY29sb3JcblxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVhbTsiXSwibmFtZXMiOlsiUGxheWVyIiwicmVxdWlyZSIsIlRFQU1fVFlQRSIsIlRFQU1fTUFUQ0giLCJURUFNX1VOTUFUQ0giLCJUZWFtIiwicGxheWVycyIsInRlYW1UeXBlIiwibnVtYmVyT2ZQbGF5ZXJzIiwiY3R4IiwiY29uc3RydWN0b3IiLCJnZXRUZWFtWUNvb3JkIiwic3RhcnRpbmdNYXRjaFlDb29yZCIsInN0YXJ0aW5nVW5tYXRjaFlDb29yZCIsImNyZWF0ZVBsYXllcnMiLCJzdGFydGluZ1hDb29yZCIsImkiLCJjdXJyZW50UGxheWVyIiwiZHJhd1BsYXllciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/team.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbXBlX2pzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;