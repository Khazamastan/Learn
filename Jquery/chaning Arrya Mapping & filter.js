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
var stocks = [
  {symbol : "XFX",price : 240},
  {symbol : "TNZ",price : 332},
  {symbol : "JXJ",price : 120}
];

var filteredStockSymbols = 
    stocks
     .filter(function(stock){
        return stock.price >= 240;
      }).
      map(function(stock){
        return stock.symbol
      });

console.log(filteredStockSymbols)