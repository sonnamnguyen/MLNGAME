import React, { useState } from 'react';
import { CharacterSelection } from './components/CharacterSelection';
import { GameInterface } from './components/GameInterface';
import { HelpModal } from './components/HelpModal';
import { Character } from './types';
export function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [balance, setBalance] = useState(10000);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showQuitNotification, setShowQuitNotification] = useState(false);
  const startGame = (character: Character) => {
    setSelectedCharacter(character);
    setGameStarted(true);
  };

  const restartGame = () => {
    setSelectedCharacter(null);
    setGameStarted(false);
    setBalance(10000);
    setGameOver(false);
    setGameWon(false);
  };

  const quitGame = () => {
    setShowQuitNotification(true);
    setTimeout(() => {
      restartGame();
      setShowQuitNotification(false);
    }, 2500);
  };

  const updateBalance = (amount: number) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
    if (newBalance <= 0) {
      setGameOver(true);
    } else if (newBalance >= 1000000) {
      setGameWon(true);
    }
  };

  return <div className="min-h-screen w-full bg-gray-900 text-white font-sans">
      {gameStarted && selectedCharacter ? (
        <GameInterface 
          character={selectedCharacter} 
          balance={balance} 
          updateBalance={updateBalance} 
          gameOver={gameOver} 
          gameWon={gameWon} 
          onRestart={restartGame}
          onQuit={quitGame}
        />
      ) : (
        <div>
          <div className="flex justify-end p-4">
            <button
              onClick={() => setShowHelp(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition"
            >
              ❓ Hướng Dẫn
            </button>
          </div>
          <CharacterSelection onSelectCharacter={startGame} />
        </div>
      )}
      {showQuitNotification && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-green-600 text-white px-8 py-6 rounded-lg shadow-lg text-center max-w-md">
            <p className="text-2xl font-bold">✓ Bạn đã lựa chọn đúng</p>
            <p className="text-lg mt-2">Người không chơi là Người thắng</p>
          </div>
        </div>
      )}
      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </div>;
}