export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct answer (0-3)
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Giá trị hàng hóa theo Mác được quyết định bởi yếu tố nào?",
    options: [
      "a. Công nghệ sản xuất",
      "b. Lao động xã hội cần thiết",
      "c. Thị hiếu người tiêu dùng",
      "d. Nguồn cung nguyên liệu"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Giá trị thặng dư là gì theo học thuyết của Mác?",
    options: [
      "a. Phần lợi nhuận từ bán hàng",
      "b. Phần lao động không được trả công của công nhân",
      "c. Tài sản tích lũy của nhà tư bản",
      "d. Chênh lệch giá thị trường"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Ai là người tạo ra giá trị trong quá trình sản xuất?",
    options: [
      "a. Nhà tư bản",
      "b. Công nhân",
      "c. Máy móc",
      "d. Nhà nước"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Theo Mác, tiền tệ trong chủ nghĩa tư bản đóng vai trò gì?",
    options: [
      "a. Công cụ tích trữ duy nhất",
      "b. Phương tiện bóc lột lao động làm thuê",
      "c. Phương tiện trao đổi hiện đại",
      "d. Công cụ quản lý thị trường"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Hình thức biểu hiện của giá trị thặng dư là gì?",
    options: [
      "a. Lợi nhuận",
      "b. Thuế",
      "c. Chi phí sản xuất",
      "d. Thu nhập quốc dân"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Tư bản bất biến là gì?",
    options: [
      "a. Phần tư bản đầu tư vào lao động",
      "b. Phần tư bản không thay đổi về giá trị trong sản xuất (máy móc, nguyên liệu)",
      "c. Tư bản để mua đất",
      "d. Tư bản lưu động"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Tư bản khả biến là gì?",
    options: [
      "a. Tư bản dùng để mở rộng sản xuất",
      "b. Tư bản để thuê lao động và tạo ra giá trị thặng dư",
      "c. Khoản vay ngân hàng",
      "d. Tư bản đầu tư dài hạn"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Sức lao động được coi là hàng hóa khi nào?",
    options: [
      "a. Khi xã hội phát triển thương mại",
      "b. Khi người lao động bị tách khỏi tư liệu sản xuất",
      "c. Khi có tiền tệ",
      "d. Khi có luật lao động"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Mục tiêu của nhà tư bản khi đầu tư sản xuất là gì?",
    options: [
      "a. Tạo việc làm",
      "b. Tăng năng suất xã hội",
      "c. Tối đa hóa giá trị thặng dư",
      "d. Ổn định thị trường"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Quy luật giá trị hoạt động theo cơ chế nào?",
    options: [
      "a. Nhà nước áp đặt",
      "b. Cung – cầu trên thị trường",
      "c. Chênh lệch giữa tiền và hàng",
      "d. Tỷ giá quốc tế"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Quá trình tích lũy tư bản dẫn đến kết quả nào?",
    options: [
      "a. Giảm bất bình đẳng",
      "b. Tập trung và tập trung hóa tư bản",
      "c. Tăng thu nhập người lao động",
      "d. Giảm cạnh tranh"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Tiền → Hàng → Tiền' (T–H–T') biểu hiện điều gì?",
    options: [
      "a. Trao đổi ngang giá",
      "b. Quá trình tiêu dùng",
      "c. Quá trình sản xuất tư bản chủ nghĩa và tạo ra giá trị thặng dư",
      "d. Mô hình thương mại đơn giản"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "Khi máy móc thay thế lao động, giá trị hàng hóa thay đổi thế nào?",
    options: [
      "a. Tăng do hiện đại hóa",
      "b. Giảm do ít lao động hơn",
      "c. Không thay đổi vì nguyên lý giá trị lao động",
      "d. Tăng do sản lượng tăng"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "'Bóc lột' theo Mác nghĩa là gì?",
    options: [
      "a. Lừa đảo tài chính",
      "b. Tước đoạt giá trị thặng dư mà công nhân tạo ra",
      "c. Giảm lương người lao động",
      "d. Đánh thuế cao vào doanh nghiệp"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Vì sao chủ nghĩa tư bản có xu hướng khủng hoảng kinh tế định kỳ?",
    options: [
      "a. Do thiên tai",
      "b. Do cạnh tranh quốc tế",
      "c. Do sản xuất vô chính phủ và mâu thuẫn giữa tư bản – lao động",
      "d. Do chính sách tiền tệ sai lầm"
    ],
    correctAnswer: 2
  }
];

export const getRandomQuestion = (): QuizQuestion => {
  const randomIndex = Math.floor(Math.random() * quizQuestions.length);
  return quizQuestions[randomIndex];
};
