/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
function getStockSymbols(stocks){
  return stocks.map(function(stock){
     return stock.symbol
  });
}

var symbols = getStockSymbols([
  {symbol : "XFX",price : 240},
  {symbol : "TNZ",price : 240},
  {symbol : "JXJ",price : 240}
]);
console.log(symbols)
/*
Exception: SyntaxError: invalid property id
@Scratchpad/1:16
*/
/*
Exception: SyntaxError: invalid property id
@Scratchpad/1:16
*/
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:20
*/