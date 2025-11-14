import React, { useState } from 'react';
import { QuizQuestion } from '../utils/quizQuestions';

interface QuizModalProps {
  readonly question: QuizQuestion;
  readonly onClose: () => void;
  readonly onAnswer: (isCorrect: boolean) => void;
}

export function QuizModal({ question, onClose, onAnswer }: QuizModalProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setSubmitted(true);
    const isCorrect = selectedAnswer === question.correctAnswer;
    
    // Show result for 1.5s then close
    setTimeout(() => {
      onAnswer(isCorrect);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-900 border-4 border-yellow-500 rounded-lg p-8 max-w-2xl w-full mx-4">
        <h2 className="text-2xl font-bold text-yellow-300 mb-6">
          ❓ Xin tiền cô Chung
        </h2>
        
        <div className="bg-gray-800 p-4 rounded-lg mb-6 border-l-4 border-yellow-500">
          <p className="text-lg text-white font-semibold mb-4">
            {question.question}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                if (!submitted) setSelectedAnswer(index);
              }}
              disabled={submitted}
              className={`w-full p-4 text-left rounded-lg font-semibold transition-all ${
                selectedAnswer === index
                  ? submitted
                    ? index === question.correctAnswer
                      ? 'bg-green-600 text-white border-2 border-green-400'
                      : 'bg-red-600 text-white border-2 border-red-400'
                    : 'bg-yellow-600 text-white border-2 border-yellow-400'
                  : submitted && index === question.correctAnswer
                  ? 'bg-green-600 text-white border-2 border-green-400'
                  : 'bg-gray-700 text-gray-200 border-2 border-gray-600 hover:bg-gray-600'
              }`}
            >
              {option}
              {submitted && index === question.correctAnswer && ' ✓'}
              {submitted && selectedAnswer === index && index !== question.correctAnswer && ' ✗'}
            </button>
          ))}
        </div>

        {!submitted && (
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition"
            >
              Hủy
            </button>
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="flex-1 bg-yellow-600 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded transition"
            >
              Gửi Câu Trả Lời
            </button>
          </div>
        )}

        {submitted && (
          <div className={`text-center py-4 px-4 rounded-lg font-bold text-xl ${
            selectedAnswer === question.correctAnswer
              ? 'bg-green-600 text-white'
              : 'bg-red-600 text-white'
          }`}>
            {selectedAnswer === question.correctAnswer ? '✓ ĐÚNG! Nhận được 5000$' : '✗ SAI! Không nhận được gì'}
          </div>
        )}
      </div>
    </div>
  );
}
