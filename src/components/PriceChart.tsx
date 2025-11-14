import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ChartData, MarketCondition } from '../types';
interface PriceChartProps {
  readonly data: ChartData[];
  readonly marketCondition: MarketCondition;
  readonly chartType: 'line' | 'candle';
}
export function PriceChart({
  data,
  marketCondition,
  chartType
}: PriceChartProps) {
  const getChartColor = () => {
    switch (marketCondition.trend) {
      case 'up':
        return '#4ade80';
      // green
      case 'down':
        return '#f87171';
      // red
      default:
        return '#60a5fa';
      // blue for sideways
    }
  };

  const getVolatilityColor = () => {
    if (marketCondition.volatility === 'high') return 'text-red-400';
    if (marketCondition.volatility === 'medium') return 'text-yellow-400';
    return 'text-green-400';
  };

  const getVolatilityLabel = () => {
    if (marketCondition.volatility === 'high') return 'CAO';
    if (marketCondition.volatility === 'medium') return 'TRUNG BÌNH';
    return 'THẤP';
  };
  const renderChart = () => {
    if (chartType === 'line') {
      return <AreaChart data={data} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={getChartColor()} stopOpacity={0.8} />
              <stop offset="95%" stopColor={getChartColor()} stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="price" stroke={getChartColor()} fillOpacity={1} fill="url(#colorPrice)" />
        </AreaChart>;
    } else {
      // Simple candle-like visualization using bars
      return <BarChart data={data} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip content={({
          active,
          payload
        }) => {
          if (active && payload?.length) {
            const data = payload[0].payload;
            return <div className="bg-gray-800 p-2 border border-gray-700">
                    <p className="text-white">O: {data.open?.toFixed(2)}</p>
                    <p className="text-white">H: {data.high?.toFixed(2)}</p>
                    <p className="text-white">L: {data.low?.toFixed(2)}</p>
                    <p className="text-white">C: {data.close?.toFixed(2)}</p>
                  </div>;
          }
          return null;
        }} />
          <Bar dataKey="high" fill="transparent" stroke={getChartColor()} />
          <Bar dataKey="open" fill={getChartColor()} stroke={getChartColor()} />
          <Bar dataKey="close" fill={getChartColor()} stroke={getChartColor()} />
          <Bar dataKey="low" fill="transparent" stroke={getChartColor()} />
        </BarChart>;
    }
  };
  return <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Biểu đồ giá Future</h3>
        <div className="flex items-center">
          <span className="mr-2">Biến động:</span>
          <span className={`font-bold ${getVolatilityColor()}`}>
            {getVolatilityLabel()}
          </span>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>;
}