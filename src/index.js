// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var denominations = [1, 5, 10, 25, 50];
    var namecoins = ['P', 'N', 'D', 'Q', 'H'];
    var resultcoin = {};
    if (currency > 10000) {
        resultcoin={"error": "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else if(currency <= 0){resultcoin={};}
    else{
        while (currency > 0) {
            var coin = denominations.pop();
            var coin1 = namecoins.pop();
            var count = Math.floor(currency/coin);
            currency -= count * coin;
            if (count) {resultcoin[coin1] = count;}
        }
    }
    return resultcoin;
}