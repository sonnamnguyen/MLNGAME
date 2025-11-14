import React from 'react';

interface HelpModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export function HelpModal({ isOpen, onClose }: HelpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-8 max-w-2xl max-h-96 overflow-y-auto border-2 border-red-500">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Hướng Dẫn Chơi Game</h2>
        
        <div className="space-y-4 text-gray-100">
          <div>
            <h3 className="text-xl font-bold text-red-400 mb-2">📊 Mục tiêu chơi:</h3>
            <p>Kiếm tiền bằng cách đoán đúng hướng giá trên thị trường (tăng hay giảm) để từ $10,000 đạt được $100,000. Người không tham gia sẽ là người thắng.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-red-400 mb-2">🎯 Cách chơi:</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>LONG:</strong> Đặt cược giá sẽ tăng lên</li>
              <li><strong>SHORT:</strong> Đặt cược giá sẽ giảm xuống</li>
              <li><strong>Số tiền:</strong> Chọn số tiền bạn muốn đặt cược (tối đa là số dư hiện tại)</li>
              <li>Nếu đoán đúng: Bạn kiếm được số tiền đặt cược</li>
              <li>Nếu đoán sai: Bạn mất số tiền đặt cược</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-red-400 mb-2">📰 Tin tức & Phân tích:</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Mỗi vòng sẽ có tin tức từ thị trường crypto</li>
              <li>Tin tức sẽ ảnh hưởng đến kết quả giao dịch</li>
              <li>Phân tích thị trường giúp bạn hiểu thêm về tình hình</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-red-400 mb-2">👤 Nhân vật & Kỹ năng đặc biệt:</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Marx:</strong> Chính xác hơn khi dự đoán xu hướng</li>
              <li><strong>Engels:</strong> Giảm thiểu thiệt hại khi tin xấu</li>
              <li><strong>Lenin:</strong> Lợi nhuận cao hơn khi thị trường biến động</li>
              <li><strong>Luxemburg:</strong> Giỏi đọc hiểu xu hướng thị trường</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-red-400 mb-2">⚠️ Nút Bỏ Cuộc:</h3>
            <p>Nếu muốn dừng chơi, nhấn nút "Bỏ Cuộc" để kết thúc trò chơi.</p>
          </div>

          <div className="bg-red-900 bg-opacity-30 p-3 rounded border-l-4 border-red-500 mt-6">
            <p className="italic text-sm">Chúc bạn may mắn! Hãy sử dụng kỹ năng Mác-Lênin của mình để chinh phục thị trường!</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}
