import React from 'react';
import { Character } from '../types';
interface GameStatusProps {
  readonly character: Character;
  readonly balance: number;
  readonly gameOver: boolean;
  readonly gameWon: boolean;
  readonly onRestart: () => void;
}
export function GameStatus({
  character,
  balance,
  gameOver,
  gameWon,
  onRestart
}: GameStatusProps) {
  return <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{character.name}</h3>
          <p className="text-yellow-300 text-sm">{character.skill}</p>
        </div>
      </div>
      <div className="mb-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Số dư:</span>
          <span className="text-2xl font-bold">
            ${balance.toLocaleString()}
          </span>
        </div>
        <div className="mt-2 bg-gray-700 h-2 rounded-full">
          <div className="bg-red-500 h-full rounded-full transition-all duration-500" style={{
          width: `${Math.min(100, balance / 1000000 * 100)}%`
        }}></div>
        </div>
        <div className="flex justify-between text-xs mt-1">
          <span>$0</span>
          <span>$1,000,000</span>
        </div>
      </div>
      {(gameOver || gameWon) && <div className={`p-3 rounded-lg text-center mb-3 ${gameWon ? 'bg-green-900' : 'bg-red-900'}`}>
          <h4 className="text-xl font-bold mb-1">
            {gameWon ? 'CHIẾN THẮNG!' : 'GAME OVER!'}
          </h4>
          <p>
            {gameWon ? 'Chúc mừng! Bạn đã trở thành nhà giao dịch tài ba theo tinh thần Mác-Lênin!' : 'Thất bại! Chủ nghĩa tư bản đã đánh bại bạn lần này...'}
          </p>
          <button onClick={onRestart} className="mt-2 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded">
            Chơi lại
          </button>
        </div>}
      <div className="text-sm text-gray-400">
        <p>Mục tiêu: $1,000,000</p>
        <p className="text-xs">{character.description}</p>
      </div>
    </div>;
}