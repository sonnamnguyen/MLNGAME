import { ChartData, MarketCondition } from '../types';
// Generate random number between min and max
const getRandomNumber = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};
// Generate random price movement based on trend and volatility
const generatePriceMovement = (previousPrice: number, trend: 'up' | 'down' | 'sideways', volatility: 'low' | 'medium' | 'high', newsImpact: number): number => {
  // Base volatility factors - INCREASED for more noise
  let volatilityFactor: number;
  if (volatility === 'low') volatilityFactor = 0.015;
  else if (volatility === 'medium') volatilityFactor = 0.04;
  else volatilityFactor = 0.08;

  // Base trend factors
  let trendFactor: number;
  if (trend === 'up') trendFactor = getRandomNumber(0.001, 0.01);
  else if (trend === 'down') trendFactor = getRandomNumber(-0.01, -0.001);
  else trendFactor = getRandomNumber(-0.005, 0.005);

  // News impact factor (scaled down from -100...100 to more reasonable price movements)
  const newsImpactFactor = newsImpact * 0.00015;
  // Calculate price movement
  const randomVolatility = getRandomNumber(-volatilityFactor, volatilityFactor);
  const movement = previousPrice * (trendFactor + randomVolatility + newsImpactFactor);
  return previousPrice + movement;
};
// Generate initial market condition
export const generateMarketCondition = (): MarketCondition => {
  const trends = ['up', 'down', 'sideways'] as const;
  const volatilities = ['low', 'medium', 'high'] as const;
  const trend = trends[Math.floor(Math.random() * trends.length)];
  const volatility = volatilities[Math.floor(Math.random() * volatilities.length)];
  const descriptions = {
    up: {
      low: 'Thị trường đang trong xu hướng tăng nhẹ, ít biến động.',
      medium: 'Thị trường đang trong xu hướng tăng với biến động vừa phải.',
      high: 'Thị trường đang tăng mạnh với nhiều biến động lớn!'
    },
    down: {
      low: 'Thị trường đang trong xu hướng giảm nhẹ, ít biến động.',
      medium: 'Thị trường đang trong xu hướng giảm với biến động vừa phải.',
      high: 'Thị trường đang giảm mạnh với nhiều biến động lớn!'
    },
    sideways: {
      low: 'Thị trường đi ngang, gần như không có biến động.',
      medium: 'Thị trường đi ngang với một số biến động.',
      high: 'Thị trường đi ngang nhưng có những biến động bất ngờ lớn!'
    }
  };
  return {
    trend,
    volatility,
    description: descriptions[trend][volatility]
  };
};
// Generate candlestick chart data
export const generateCandlestickData = (dataPoints: number, marketCondition: MarketCondition, newsImpact: number, startPrice: number = 1000): ChartData[] => {
  const data: ChartData[] = [];
  let currentPrice = startPrice;
  for (let i = 0; i < dataPoints; i++) {
    const open = currentPrice;
    // Generate close price based on market condition and news impact
    currentPrice = generatePriceMovement(currentPrice, marketCondition.trend, marketCondition.volatility, i === dataPoints - 1 ? newsImpact : 0 // Apply news impact only on the last candle
    );
    const close = currentPrice;
    // Generate high and low
    let volatilityMultiplier: number;
    if (marketCondition.volatility === 'low') volatilityMultiplier = 0.02;
    else if (marketCondition.volatility === 'medium') volatilityMultiplier = 0.04;
    else volatilityMultiplier = 0.08;

    const high = Math.max(open, close) * (1 + getRandomNumber(0.003, volatilityMultiplier));
    const low = Math.min(open, close) * (1 - getRandomNumber(0.003, volatilityMultiplier));
    data.push({
      date: `Candle ${i + 1}`,
      price: close,
      open,
      close,
      high,
      low
    });
  }
  return data;
};
// Generate line chart data
export const generateLineChartData = (dataPoints: number, marketCondition: MarketCondition, newsImpact: number, startPrice: number = 1000): ChartData[] => {
  const data: ChartData[] = [];
  let currentPrice = startPrice;
  for (let i = 0; i < dataPoints; i++) {
    // Generate price based on market condition and news impact
    currentPrice = generatePriceMovement(currentPrice, marketCondition.trend, marketCondition.volatility, i === dataPoints - 1 ? newsImpact : 0 // Apply news impact only on the last point
    );
    data.push({
      date: `Point ${i + 1}`,
      price: currentPrice
    });
  }
  return data;
};