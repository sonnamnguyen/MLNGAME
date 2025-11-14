import React, { useEffect, useState } from 'react';
import { Character, ChartData, MarketCondition, NewsItem, TradeDirection } from '../types';
import { PriceChart } from './PriceChart';
import { NewsPanel } from './NewsPanel';
import { TradingControls } from './TradingControls';
import { GameStatus } from './GameStatus';
import { NotificationStack } from './Notification';
import { QuizModal } from './QuizModal';
import { generateMarketCondition, generateCandlestickData } from '../utils/chartGenerator';
import { generateRandomNews } from '../utils/newsGenerator';
import { calculateTradeOutcome, generateMarketAnalysis } from '../utils/gameLogic';
import { getRandomQuestion, QuizQuestion } from '../utils/quizQuestions';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}
interface GameInterfaceProps {
  readonly character: Character;
  readonly balance: number;
  readonly updateBalance: (amount: number) => void;
  readonly gameOver: boolean;
  readonly gameWon: boolean;
  readonly onRestart: () => void;
  readonly onQuit: () => void;
}
export function GameInterface({
  character,
  balance,
  updateBalance,
  gameOver,
  gameWon,
  onRestart,
  onQuit
}: GameInterfaceProps) {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [marketCondition, setMarketCondition] = useState<MarketCondition>(generateMarketCondition());
  const [currentNews, setCurrentNews] = useState<NewsItem>(generateRandomNews());
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastTradeResult, setLastTradeResult] = useState<{ explanation: string; quote?: string } | null>(null);
  const [marketAnalysis, setMarketAnalysis] = useState<string>('');
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [lastDirection, setLastDirection] = useState<TradeDirection | null>(null);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [askCount, setAskCount] = useState(0);

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const addNotification = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    const id = `${Date.now()}-${Math.random()}`;
    const newNotification: Notification = { id, message, type };
    setNotifications(prev => [...prev, newNotification]);
    setTimeout(() => {
      removeNotification(id);
    }, 3000);
  };

  const handleOpenQuiz = () => {
    if (askCount >= 3) {
      addNotification('Bạn đã xin tiền cô Chung 3 lần rồi! Không còn cơ hội nữa.', 'warning');
      return;
    }
    const question = getRandomQuestion();
    setCurrentQuestion(question);
    setShowQuizModal(true);
  };

  const handleQuizAnswer = (isCorrect: boolean) => {
    setAskCount(prev => prev + 1);
    if (isCorrect) {
      updateBalance(5000);
      addNotification('✓ ĐÚNG! Nhận được 5000$ từ cô Chung', 'success');
    } else {
      addNotification('✗ SAI! Cô Chung không cho tiền', 'error');
    }
  };

  // Initialize game
  useEffect(() => {
    generateNewMarketState();
  }, []);
  // Generate new market state (chart, news, condition)
  const generateNewMarketState = () => {
    const newMarketCondition = generateMarketCondition();
    const newNews = generateRandomNews();
    const dataPoints = 20;
    const newChartData = generateCandlestickData(dataPoints, newMarketCondition, newNews.impact);
    setMarketCondition(newMarketCondition);
    setCurrentNews(newNews);
    setChartData(newChartData);
    const analysis = generateMarketAnalysis(newMarketCondition, newNews.impact, character);
    setMarketAnalysis(analysis);
    setLastTradeResult(null);
  };

  // Handle trade
  const handleTrade = (direction: TradeDirection, amount: number) => {
    if (isProcessing || gameOver || gameWon) return;

    // Notify direction change
    if (lastDirection && lastDirection !== direction) {
      addNotification(`Chuyển sang ${direction === 'LONG' ? 'MUA' : 'BÁN'}`, 'info');
    }
    setLastDirection(direction);

    setIsProcessing(true);

    // Calculate trade outcome
    const result = calculateTradeOutcome(direction, amount, marketCondition, currentNews.impact, character);

    // Display result and show notification
    setLastTradeResult({ explanation: result.explanation, quote: result.quote });
    
    if (result.success) {
      addNotification(`✓ Bạn nhận được $${(result.profit).toLocaleString()}!`, 'success');
    } else {
      addNotification(`✕ Bạn mất $${Math.abs(result.profit).toLocaleString()}!`, 'error');
    }

    // Update balance
    updateBalance(result.profit);

    // Generate new market state after a delay
    setTimeout(() => {
      generateNewMarketState();
      setIsProcessing(false);
    }, 2000);
  };
  return <div className="container mx-auto px-4 py-6">
      <NotificationStack notifications={notifications} onRemove={removeNotification} />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-red-500">Future Trader</h1>
        <h2 className="text-xl font-semibold">Kinh Tế Chính Trị Mác-Lênin</h2>
        <button
          onClick={onQuit}
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Bỏ Cuộc
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold">Thị trường</h2>
          
          {lastTradeResult && lastTradeResult.quote && (
            <div className="bg-gradient-to-r from-yellow-900 to-orange-900 p-4 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold mb-2 text-yellow-300">💭 Triết lý</h3>
              <p className="text-base italic text-yellow-50">
                {character.name} nói: {lastTradeResult.quote}
              </p>
            </div>
          )}

          <PriceChart data={chartData} marketCondition={marketCondition} chartType="candle" />
          <NewsPanel news={currentNews} />
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Phân tích thị trường</h3>
            <div className="border-l-4 border-red-500 pl-3 py-2">
              <p className="italic">{marketAnalysis}</p>
            </div>
          </div>
          {lastTradeResult && <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">Kết quả giao dịch</h3>
                <p className="text-lg whitespace-pre-wrap">{lastTradeResult.explanation}</p>
              </div>
            </div>}
        </div>
        <div className="space-y-6">
          <GameStatus character={character} balance={balance} gameOver={gameOver} gameWon={gameWon} onRestart={onRestart} />
          <TradingControls balance={balance} onTrade={handleTrade} isProcessing={isProcessing} />
          <button
            onClick={handleOpenQuiz}
            disabled={askCount >= 3}
            className={`w-full font-bold py-4 px-4 rounded-lg transition shadow-lg border-2 ${
              askCount >= 3
                ? 'bg-gray-600 text-gray-400 border-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white border-yellow-400'
            }`}
          >
            <div className="text-2xl mb-2">💰 Xin tiền cô Chung</div>
            <div className="text-sm">
              {askCount >= 3 ? 'Đã hết cơ hội xin tiền' : `${3 - askCount} lần còn lại (Mỗi lần đúng +5000$)`}
            </div>
          </button>
        </div>
      </div>
      {showQuizModal && currentQuestion && (
        <QuizModal
          question={currentQuestion}
          onClose={() => setShowQuizModal(false)}
          onAnswer={handleQuizAnswer}
        />
      )}
    </div>;
}