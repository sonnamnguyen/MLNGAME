import React from 'react';
import { Character } from '../types';
const characters: Character[] = [{
  id: 'marx',
  name: 'Karl Marx',
  image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Karl_Marx_001.jpg',
  skill: 'Phân tích chu kỳ kinh tế',
  buff: {
    type: 'accuracy',
    value: 10
  },
  description: 'Tăng độ chính xác dự đoán xu hướng chart +10%'
}, {
  id: 'engels',
  name: 'Friedrich Engels',
  image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Friedrich_Engels_portrait_%28cropped%29.jpg',
  skill: 'Nhận diện khủng hoảng kinh tế',
  buff: {
    type: 'risk',
    value: 20
  },
  description: 'Khi tin tiêu cực mạnh xuất hiện: giảm rủi ro thua -20%'
}, {
  id: 'lenin',
  name: 'Vladimir Lenin',
  image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTuCIJUiT-n38FtaV3XE9dyoOwXs2RAd8W7qG3ZtAUKplldXzyufcP35PlM9RBlopOaiUMbcSJVON4wKJo',
  skill: 'Phân tích độc quyền – tài chính',
  buff: {
    type: 'profit',
    value: 30
  },
  description: 'Khi thị trường biến động lớn, tăng lợi nhuận khi đúng +30%'
}, {
  id: 'luxemburg',
  name: 'Rosa Luxemburg',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Rosa_Luxemburg_%28cropped%29.jpg/500px-Rosa_Luxemburg_%28cropped%29.jpg',
  skill: 'Nhạy cảm với thị trường mở rộng/thu hẹp',
  buff: {
    type: 'trend',
    value: 15
  },
  description: 'Tăng hiệu quả đọc trend chart +15%'
}];
interface CharacterSelectionProps {
  readonly onSelectCharacter: (character: Character) => void;
}
export function CharacterSelection({
  onSelectCharacter
}: CharacterSelectionProps) {
  return <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-red-500 mb-2">Future Trader</h1>
        <h2 className="text-2xl font-semibold mb-4">
          Kinh Tế Chính Trị Mác-Lênin
        </h2>
        <p className="text-lg">
          Chọn một nhân vật lịch sử để bắt đầu hành trình giao dịch của bạn!
          <br />
          Mỗi nhân vật có kỹ năng đặc biệt ảnh hưởng đến khả năng giao dịch.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {characters.map(character => <div key={character.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700" onClick={() => onSelectCharacter(character)}>
            <div className="aspect-square overflow-hidden rounded-lg mb-4">
              <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-red-400 mb-2">
              {character.name}
            </h3>
            <p className="text-yellow-300 font-semibold mb-1">
              {character.skill}
            </p>
            <p className="text-gray-300">{character.description}</p>
          </div>)}
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>Mục tiêu: Bắt đầu với 10.000$ và đạt được 100.000$</p>
        <p>
          Phân tích thị trường, đọc tin tức, và quyết định LONG hay SHORT để đạt
          được mục tiêu!
        </p>
      </div>
    </div>;
}