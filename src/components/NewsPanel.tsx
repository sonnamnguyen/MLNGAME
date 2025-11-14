import React from 'react';
import { NewsItem } from '../types';
interface NewsPanelProps {
  readonly news: NewsItem;
}
export function NewsPanel({
  news
}: NewsPanelProps) {
  return <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2 flex items-center">
        <span className="text-red-500 mr-2">📰</span>
        {'Tin tức thị trường'}
      </h3>
      <div className="border-l-4 border-yellow-500 pl-4 py-3 bg-gray-900 rounded-r">
        <p className="text-lg leading-relaxed">{news.text}</p>
      </div>
      <div className="mt-3 text-sm text-gray-400 italic">
        💡 Hãy phân tích tin tức này để đưa ra quyết định giao dịch!
      </div>
    </div>;
}