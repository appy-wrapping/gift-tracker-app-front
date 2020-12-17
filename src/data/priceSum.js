// function to map over gifts in order to get an array of prices
let priceArray = gifts.map(gift => gift.price);

// array reducer in order to get a total value
let sum = (total, currentPrice) => total + currentPrice;
let PriceSum = priceArray.reduce(sum);

export default PriceSum;