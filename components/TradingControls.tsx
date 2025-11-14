import React, { useState } from 'react';
import { TradeDirection } from '../types';
interface TradingControlsProps {
  balance: number;
  onTrade: (direction: TradeDirection, amount: number) => void;
  isProcessing: boolean;
}
export function TradingControls({
  balance,
  onTrade,
  isProcessing
}: TradingControlsProps) {
  const [amount, setAmount] = useState(1000);
  const [error, setError] = useState<string | null>(null);
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value <= 0) {
      setAmount(0);
      setError('Số tiền phải lớn hơn 0');
    } else if (value > balance) {
      setAmount(balance);
      setError('Số tiền không thể lớn hơn số dư');
    } else {
      setAmount(value);
      setError(null);
    }
  };
  const handleTrade = (direction: TradeDirection) => {
    if (amount <= 0) {
      setError('Số tiền phải lớn hơn 0');
      return;
    }
    if (amount > balance) {
      setError('Số tiền không thể lớn hơn số dư');
      return;
    }
    onTrade(direction, amount);
  };
  const presetAmounts = [{
    label: '10%',
    value: Math.floor(balance * 0.1)
  }, {
    label: '25%',
    value: Math.floor(balance * 0.25)
  }, {
    label: '50%',
    value: Math.floor(balance * 0.5)
  }, {
    label: 'ALL IN',
    value: balance
  }];
  return <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Đặt lệnh giao dịch</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Số tiền ($)</label>
        <input type="number" value={amount} onChange={handleAmountChange} className="bg-gray-700 text-white px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-500" min={1} max={balance} disabled={isProcessing} />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {presetAmounts.map(preset => <button key={preset.label} onClick={() => setAmount(preset.value)} className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-sm" disabled={isProcessing}>
            {preset.label}
          </button>)}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => handleTrade('LONG')} className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={isProcessing || amount <= 0 || amount > balance}>
          LONG
        </button>
        <button onClick={() => handleTrade('SHORT')} className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={isProcessing || amount <= 0 || amount > balance}>
          SHORT
        </button>
      </div>
    </div>;
}