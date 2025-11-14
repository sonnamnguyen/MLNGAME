import { Character, MarketCondition, TradeDirection } from '../types';

interface TradeResult {
  success: boolean;
  profit: number;
  explanation: string;
  quote?: string;
}

// Get philosophical quote based on character and result
const getPhilosophicalQuote = (characterId: string, success: boolean): string => {
  const quotes: Record<string, { win: string[], lose: string[] }> = {
    marx: {
      win: [
        '"Công nhân của thế giới, hãy đoàn kết! Thị trường vừa chứng minh luận thuyết của tôi."',
        '"Lịch sử luôn lặp lại - lần này chúng ta đoán đúng xu hướng!"',
        '"Giai cấp tư bản thừa nhận thua cuộc trước phân tích của chúng ta!"'
      ],
      lose: [
        '"Đây là khủng hoảng không thể tránh của chủ nghĩa tư bản. Chúng ta sẽ quay trở lại."',
        '"Thị trường hôm nay không tuân theo logic của lịch sử. Nhưng lịch sử vẫn đúng."',
        '"Mâu thuẫn nào cũng phải giải quyết. Thua lần này, chúng ta sẽ thắng sau."'
      ]
    },
    engels: {
      win: [
        '"Sự phát triển của lực lượng sản xuất vừa chứng minh tôi đúng. Vật chất quyết định ý thức!"',
        '"Những quy luật của lịch sử không thể chối cãi. Phân tích dựa trên cơ sở kinh tế luôn đúng."',
        '"Chủ nghĩa tư bản tự hủy hoại mình. Chúng ta vừa nhìn thấy điều đó rõ ràng!"'
      ],
      lose: [
        '"Ngay cả những quy luật khoa học cũng có ngoại lệ. Ngày hôm nay là một ngoại lệ."',
        '"Duy vật lịch sử không phủ định tình cờ. Hôm nay chúng ta gặp tình cờ xấu."',
        '"Lực lượng sản xuất chưa phát triển đủ để theo quy luật. Chúng ta sẽ đợi."'
      ]
    },
    lenin: {
      win: [
        '"Đế quốc chủ nghĩa hôm nay tự phát hành tín hiệu sai lệch. Chúng ta đã nhìn rõ sự thật!"',
        '"Độc quyền tư bản vừa lộ diện yếu điểm của nó. Cuộc cách mạng là không tránh khỏi!"',
        '"Một bước đi tới giải phóng kinh tế. Chiến thắng này là nền tảng cho những chiến thắng tới!"'
      ],
      lose: [
        '"Đế quốc chủ nghĩa vẫn còn sức mạnh hơn chúng ta tưởng. Nhưng những ngày của nó đã đếm ngược."',
        '"Thất bại hôm nay là bài học quý báu. Cách mạng cần phải hiểu rõ lực địch."',
        '"Tư bản không dễ bị đánh bại. Nhưng nó sẽ bị đánh bại. Không phải hôm nay, nhưng chắc chắn."'
      ]
    },
    luxemburg: {
      win: [
        '"Chúng ta nhận thức rõ thị trường, vì chúng ta là một phần của nó. Chiến thắng này chứng minh điều đó!"',
        '"Cách mạng không thể tách rời khỏi hiện thực kinh tế. Hôm nay hiện thực đã nói lên điều gì là đúng."',
        '"Tự phát của lịch sử luôn đúng hơn kế hoạch bao cấp. Và hôm nay, tự phát đã hỗ trợ chúng ta!"'
      ],
      lose: [
        '"Thị trường vượt khỏi tầm kiểm soát. Nhưng điều này không có nghĩa lý thuyết của chúng ta sai."',
        '"Ngay cả những lực lượng cách mạng cũng không thể kiểm soát hoàn toàn thị trường tư bản."',
        '"Thất bại này dạy chúng ta rằng con đường giải phóng còn nhiều thách thức."'
      ]
    }
  };
  
  const normalizedId = characterId.toLowerCase().trim();
  console.log('DEBUG - Input characterId:', characterId, 'normalizedId:', normalizedId);
  console.log('DEBUG - Available character keys:', Object.keys(quotes));
  
  const characterQuotes = quotes[normalizedId];
  if (!characterQuotes) {
    console.warn('No quotes found for character:', normalizedId);
    console.warn('Available keys:', Object.keys(quotes));
    return '';
  }
  
  const selectedQuotes = success ? characterQuotes.win : characterQuotes.lose;
  const selected = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
  console.log('DEBUG - Character:', normalizedId, 'Success:', success, 'Selected quote:', selected);
  return selected;
};
// Apply character-specific buffs
const applyCharacterBuffs = (baseProb: number, character: Character, marketCondition: MarketCondition, newsImpact: number): { probability: number; multiplier: number } => {
  let probability = baseProb;
  let multiplier = 1;

  if (character.id === 'marx' && marketCondition.trend !== 'sideways') {
    probability += 0.1;
  } else if (character.id === 'engels' && newsImpact < -40 && probability < 0.5) {
    probability += 0.2;
  } else if (character.id === 'lenin' && marketCondition.volatility === 'high') {
    multiplier = 1.3;
  } else if (character.id === 'luxemburg') {
    const isCorrectDirection =
      (marketCondition.trend === 'up') || (marketCondition.trend === 'down');
    if (isCorrectDirection) {
      probability += 0.15;
    }
  }

  return { probability: Math.max(0.1, Math.min(0.9, probability)), multiplier };
};

// Calculate win probability based on various factors
const calculateWinProbability = (direction: TradeDirection, marketCondition: MarketCondition, newsImpact: number, character: Character): { probability: number; multiplier: number } => {
  let baseWinProbability = 0.5;

  if (marketCondition.trend === 'up' && direction === 'LONG') {
    baseWinProbability += 0.15;
  } else if (marketCondition.trend === 'down' && direction === 'SHORT') {
    baseWinProbability += 0.15;
  } else if (marketCondition.trend !== 'sideways') {
    baseWinProbability -= 0.1;
  }

  const newsAdjustment = (newsImpact / 100) * 0.2;
  if ((newsImpact > 0 && direction === 'LONG') || (newsImpact < 0 && direction === 'SHORT')) {
    baseWinProbability += Math.abs(newsAdjustment);
  } else if (newsImpact !== 0) {
    baseWinProbability -= Math.abs(newsAdjustment);
  }

  return applyCharacterBuffs(baseWinProbability, character, marketCondition, newsImpact);
};

// Calculate trade outcome based on market conditions, news impact, and character buffs
export const calculateTradeOutcome = (direction: TradeDirection, amount: number, marketCondition: MarketCondition, newsImpact: number, character: Character): TradeResult => {
  const { probability: finalWinProbability, multiplier: profitMultiplier } = calculateWinProbability(direction, marketCondition, newsImpact, character);

  // Determine outcome
  const success = Math.random() < finalWinProbability;

  // Calculate profit/loss
  const profit = success ? amount * profitMultiplier : -amount;
  // Generate explanation
  let explanation = '';
  if (success) {
    explanation = `Giao dịch thành công! ${character.name} đã phân tích đúng thị trường.`;
    if (profitMultiplier > 1) {
      explanation += ` Kỹ năng đặc biệt tăng lợi nhuận lên ${Math.round(profitMultiplier * 100 - 100)}%!`;
    }
  } else {
    explanation = `Giao dịch thất bại! Thị trường di chuyển ngược với dự đoán.`;
    if (character.id === 'engels' && newsImpact < -40) {
      explanation += ` Tuy nhiên, kỹ năng của Engels đã giảm thiểu thiệt hại.`;
    }
  }

  // Add philosophical quote
  const quote = getPhilosophicalQuote(character.id, success);
  console.log('DEBUG - character.id:', character.id, 'success:', success, 'quote:', quote);

  return {
    success,
    profit,
    explanation,
    quote
  };
};
// Generate a Marxist-Leninist analysis of the market
export const generateMarketAnalysis = (marketCondition: MarketCondition, newsImpact: number, character: Character): string => {
  const analyses = [
  // Karl Marx analyses
  {
    character: 'marx',
    up: ['Theo phân tích chu kỳ kinh tế, đây là giai đoạn tích lũy tư bản đang mở rộng.', 'Sự tích tụ và tập trung tư bản đang gia tăng, đẩy giá thị trường lên cao.', 'Giai đoạn bùng nổ của chu kỳ kinh tế đang diễn ra, tư bản đang mở rộng tái sản xuất.'],
    down: ['Đây là biểu hiện của khủng hoảng tư bản thừa, giá trị thặng dư đang sụt giảm.', 'Mâu thuẫn nội tại của chủ nghĩa tư bản đang bộc lộ, tạo ra xu hướng giảm.', 'Quá trình tích lũy tư bản đang gặp trở ngại, dẫn đến suy giảm giá trị.'],
    sideways: ['Thị trường đang trong trạng thái cân bằng tạm thời giữa các lực lượng sản xuất.', 'Đây là giai đoạn chuyển tiếp trong chu kỳ kinh tế tư bản chủ nghĩa.', 'Sự đấu tranh giữa các nhóm tư bản đang tạo ra thị trường đi ngang.']
  },
  // Engels analyses
  {
    character: 'engels',
    up: ['Sự phát triển của lực lượng sản xuất đang thúc đẩy thị trường tăng giá.', 'Tư bản đang trong giai đoạn tích lũy mở rộng, đẩy giá trị lên cao.', 'Thị trường đang phản ánh sự mở rộng của tái sản xuất tư bản chủ nghĩa.'],
    down: ['Các dấu hiệu khủng hoảng kinh tế đang hiện rõ, thị trường đang suy giảm.', 'Mâu thuẫn giữa sản xuất xã hội và chiếm hữu tư nhân đang bộc lộ.', 'Khủng hoảng chu kỳ của chủ nghĩa tư bản đang diễn ra, giá trị đang sụt giảm.'],
    sideways: ['Thị trường đang trong trạng thái cân bằng không ổn định của chủ nghĩa tư bản.', 'Các lực lượng đối lập trong nền kinh tế đang tạm thời cân bằng.', 'Đây là giai đoạn tích lũy lực lượng trước khi có biến động lớn.']
  },
  // Lenin analyses
  {
    character: 'lenin',
    up: ['Các tập đoàn độc quyền đang thao túng thị trường, đẩy giá lên cao.', 'Tư bản tài chính đang thúc đẩy xu hướng tăng để tối đa hóa lợi nhuận.', 'Giai đoạn đế quốc chủ nghĩa đang thể hiện qua sự tăng giá mạnh mẽ này.'],
    down: ['Mâu thuẫn trong hệ thống tài chính độc quyền đang gây ra sự sụt giảm.', 'Khủng hoảng của chủ nghĩa đế quốc đang bộc lộ qua xu hướng giảm giá.', 'Cuộc đấu tranh giữa các tập đoàn tài chính đang làm thị trường suy yếu.'],
    sideways: ['Các nhóm tư bản tài chính đang trong trạng thái cân bằng quyền lực.', 'Đây là giai đoạn tích lũy và tập trung vốn trước biến động lớn.', 'Sự phân chia lại thị trường giữa các tập đoàn độc quyền đang diễn ra.']
  },
  // Rosa Luxemburg analyses
  {
    character: 'luxemburg',
    up: ['Thị trường đang mở rộng, tìm kiếm không gian tích lũy mới.', 'Quá trình tích lũy tư bản đang diễn ra mạnh mẽ, thúc đẩy giá lên cao.', 'Sự bành trướng của thị trường đang tạo ra xu hướng tăng giá.'],
    down: ['Thị trường đang thu hẹp, phản ánh khủng hoảng tích lũy tư bản.', 'Sự mất cân đối giữa sản xuất và tiêu thụ đang gây ra xu hướng giảm.', 'Khủng hoảng tích lũy vốn đang thể hiện qua sự sụt giảm giá trị.'],
    sideways: ['Thị trường đang trong giai đoạn cân bằng tạm thời giữa mở rộng và thu hẹp.', 'Quá trình tái sản xuất mở rộng đang gặp trở ngại, tạo ra thị trường đi ngang.', 'Đây là giai đoạn chuyển tiếp trong chu kỳ tích lũy tư bản.']
  }];
  const characterAnalyses = analyses.find(a => a.character === character.id);
  if (!characterAnalyses) return 'Thị trường đang biến động, hãy phân tích kỹ.';
  const trend = marketCondition.trend;
  const analysisPool = characterAnalyses[trend];
  let analysis = analysisPool[Math.floor(Math.random() * analysisPool.length)];
  // Add news impact analysis
  if (newsImpact > 50) {
    analysis += ' Tin tức tích cực đang thúc đẩy thêm xu hướng thị trường.';
  } else if (newsImpact > 0) {
    analysis += ' Có một số yếu tố tích cực đang ảnh hưởng đến thị trường.';
  } else if (newsImpact < -50) {
    analysis += ' Tin tức tiêu cực đang tác động mạnh đến tâm lý thị trường.';
  } else if (newsImpact < 0) {
    analysis += ' Có một số yếu tố tiêu cực đang ảnh hưởng đến thị trường.';
  }
  return analysis;
};