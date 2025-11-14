import { NewsItem, NewsImpact } from '../types';
const newsDatabase: Record<NewsImpact, NewsItem[]> = {
  'positive-strong': [{
    text: 'Một công ty AI tuyên bố đã tạo ra thuật toán dự đoán xu hướng giá crypto với độ chính xác "lên đến 92%". Dù được cộng đồng công nghệ kỳ vọng, nhưng tính khả thi thực tế vẫn còn được thảo luận gay gắt.',
    type: 'positive-strong',
    impact: 65
  }, {
    text: 'Một công ty công nghệ hàng đầu ở Nhật Bản bất ngờ tiết lộ họ đã thử nghiệm thành công hệ thống thanh toán dựa trên blockchain trong các cửa hàng tiện lợi.',
    type: 'positive-strong',
    impact: 72
  }, {
    text: 'Một startup Việt Nam trong lĩnh vực metaverse công bố gọi vốn thành công 40 triệu USD từ quỹ nước ngoài, thu hút sự chú ý của nhà đầu tư toàn cầu.',
    type: 'positive-strong',
    impact: 68
  }, {
    text: 'Hội nghị Blockchain Thế giới 2025 vừa kết thúc, với hàng loạt tuyên bố về việc mở rộng kết hợp AI – crypto, đem lại sơn vọng cho ngành.',
    type: 'positive-strong',
    impact: 70
  }, {
    text: 'Lượng stablecoin USDT trên các sàn giao dịch tăng 20% chỉ trong 24 giờ, tín hiệu "tiền thông minh" chuẩn bị bước vào thị trường mạnh mẽ.',
    type: 'positive-strong',
    impact: 75
  }, {
    text: 'Quỹ đầu tư lớn BlackRock cập nhật báo cáo liệt kê 5 lĩnh vực blockchain tiềm năng cho 2026, khiến thị trường crypto phục hồi mạnh mẽ.',
    type: 'positive-strong',
    impact: 78
  }, {
    text: 'Tính năng mới của Ethereum được công bố hôm nay, nhưng thực tế là "hoạt động không ổn định trên một số client", gây ra sự mâu thuẫn.',
    type: 'positive-strong',
    impact: -45
  }, {
    text: 'Tin tức về việc một quỹ lớn "mua vào mạnh mẽ" bitcoin xuất hiện trên mạng, nhưng được xác minh là thất thoát hoàn toàn.',
    type: 'positive-strong',
    impact: -55
  }],
  positive: [{
    text: 'Một quốc gia châu Phi tuyên bố sẽ thử nghiệm dùng token hóa tài sản công làm phương thức huy động vốn mới, được cộng đồng crypto đánh giá cao.',
    type: 'positive',
    impact: 45
  }, {
    text: 'Một lượng lớn ETH bị rút khỏi các sàn giao dịch, nhiều người nghĩ rằng "cá voi đang gom" để tích trữ dài hạn.',
    type: 'positive',
    impact: 42
  }, {
    text: 'Khối lượng giao dịch futures trên các sàn lớn tăng vọt, gấp 3 lần so với ngày thường, phản ánh lực cầu tăng mạnh.',
    type: 'positive',
    impact: 48
  }, {
    text: 'Một cá voi với ví trị giá hơn 500 triệu USD đã chuyển Bitcoin sang sàn giao dịch, gợi ý có khả năng "chuyển kho" bảo mật hoặc giao dịch.',
    type: 'positive',
    impact: 40
  }, {
    text: 'Dữ liệu on-chain cho thấy lượng ví mới tăng đột biến trong tuần qua, khiến nhà đầu tư lạc quan về sự tăng trưởng người dùng.',
    type: 'positive',
    impact: 38
  }, {
    text: 'Một dự án DeFi công bố khoá vốn $500 triệu từ nhà đầu tư, nhưng sau đó thì team "không còn liên lạc được".',
    type: 'positive',
    impact: -62
  }, {
    text: 'Tin vui là một sàn giao dịch "bước vào thị trường Việt Nam", nhưng sau 2 giờ thì họ rút lại thông báo do "vấn đề pháp lý".',
    type: 'positive',
    impact: -48
  }, {
    text: 'Một startup crypto công bố "đã được định giá $1 tỷ", nhưng các nhà đầu tư khác cảnh báo "đó là con số bị thổi phồng".',
    type: 'positive',
    impact: -38
  }, {
    text: 'Dữ liệu cho thấy "whale đang mua vào", nhưng phân tích lại cho thấy đó là bots tự động, không phải con người thật.',
    type: 'positive',
    impact: -52
  }, {
    text: 'Một quỹ VC lớn công bố "tăng gấp 3 lần quỹ crypto", nhưng lại không tiết lộ chiến lược đầu tư cụ thể nào.',
    type: 'positive',
    impact: -35
  }],
  neutral: [{
    text: 'Một báo cáo rò rỉ cho thấy một quỹ ETF Bitcoin lớn đang gặp áp lực rút vốn từ nhà đầu tư tổ chức, nhưng quỹ phủ nhận tuyên bố "chỉ là tin đồn thất thiệt".',
    type: 'neutral',
    impact: 0
  }, {
    text: 'Chuỗi cung ứng chip toàn cầu vừa thông báo tồn kho đang giảm, tạo sự không chắc chắn về tương lai giá card đồ họa và máy đào.',
    type: 'neutral',
    impact: 0
  }, {
    text: 'Chính phủ Hàn Quốc bất ngờ mở cuộc điều tra về 17 dự án blockchain mới nổi do nghi ngờ sử dụng "ngân sách marketing" để thao túng giá, nhưng chưa có kết luận.',
    type: 'neutral',
    impact: 0
  }, {
    text: 'Một bài nghiên cứu của MIT cho rằng việc áp dụng Layer-2 hiện tại chưa thực sự giải quyết được vấn đề phí giao dịch, gây tranh cãi trong cộng đồng.',
    type: 'neutral',
    impact: 0
  }, {
    text: 'Elon Musk trả lời một câu hỏi về crypto bằng câu nói mơ hồ: "Tương lai thuộc về những gì phi tập trung", khiến cộng đồng mạng lan truyền và tranh luận gay gắt.',
    type: 'neutral',
    impact: 0
  }, {
    text: 'Một dự án blockchain công bố "sắp ra mắt token", nhưng đến giờ vẫn chưa có ngày cụ thể, tạo sự chờ đợi và lo lắng.',
    type: 'neutral',
    impact: 0
  }, {
    text: 'Dữ liệu trên-chuỗi cho thấy hoạt động "bình thường", nhưng các nhà phân tích không thể giải thích tại sao giá lại biến động lớn.',
    type: 'neutral',
    impact: 0
  }, {
    text: 'Một máy chủ của sàn giao dịch bị "chậm" nhưng không phải là hacking, chỉ là vấn đề kỹ thuật tạm thời.',
    type: 'neutral',
    impact: 0
  }, {
    text: 'Tin đồn về "partnership lớn" giữa hai dự án hàng đầu lan truyền, nhưng cả hai đều "im lặng" khi được hỏi.',
    type: 'neutral',
    impact: 0
  }, {
    text: 'Một bài báo phân tích "tại sao giá crypto biến động không theo logic", kết luận là "thị trường vẫn còn non nớt".',
    type: 'neutral',
    impact: 0
  }],
  negative: [{
    text: 'Một lỗ hổng nghiêm trọng được phát hiện trong thư viện mã nguồn của một nền tảng ví đa chữ ký, khiến nhiều đội ngũ phát triển phải tạm ngừng cập nhật.',
    type: 'negative',
    impact: -35
  }, {
    text: 'Một sàn giao dịch châu Âu báo cáo sự cố ngừng hoạt động 30 phút do "lưu lượng truy cập tăng đột biến bất thường", dấy lên đồn đoán về robot giao dịch.',
    type: 'negative',
    impact: -38
  }, {
    text: 'Quỹ đầu tư lớn BlackRock cũng cảnh báo crypto vẫn là "tài sản rủi ro cao", tạo sự mâu thuẫn trong tin hiệu thị trường.',
    type: 'negative',
    impact: -32
  }, {
    text: 'Một bài đăng nặc danh lan truyền cho rằng đội ngũ phát triển của một dự án top 20 marketcap chuẩn bị "bỏ trốn", tuy CEO phủ nhận nhưng cộng đồng vẫn chia rẽ.',
    type: 'negative',
    impact: -42
  }, {
    text: 'CEO dự án livestream phủ nhận tin đồn nhưng đưa ra kế hoạch "nâng cấp mới" chưa rõ ràng, khiến thị trường nghi ngờ.',
    type: 'negative',
    impact: -28
  }, {
    text: 'Một cổng thanh toán crypto bị phát hiện "chấp nhận tiền từ tài khoản vay", gây lo ngại về rửa tiền và hacker sẽ tranh nhau sử dụng.',
    type: 'negative',
    impact: -48
  }, {
    text: 'Tin tức cho biết một công ty mining "bộc lộ thông tin khách hàng", khiến ngành ngành chìm trong sợ hãi và giá crypto giảm mạnh.',
    type: 'negative',
    impact: -52
  }, {
    text: 'Một dự án DeFi công bố "hoàn trả tất cả tiền cho nạn nhân hack", nhưng điều này dần dần được xem là "signal xấu" của sự thiếu tin tưởng.',
    type: 'negative',
    impact: -45
  }, {
    text: 'Đông đảo nhà đầu tư bitcoin bắt đầu "rút tiền khỏi sàn", nhưng nguyên nhân lại là "họ muốn self-custody tốt hơn, không phải lo sợ".',
    type: 'negative',
    impact: -25
  }, {
    text: 'Một token mới công bố "burn 50% token supply", thực chất là họ muốn "tăng giá bằng cách giảm supply", một tactic xưa cũ.',
    type: 'negative',
    impact: -38
  }],
  'negative-strong': [{
    text: 'Bộ Tài chính Hoa Kỳ bất ngờ công bố tài liệu đề xuất "tăng cường giám sát" các sàn crypto để giảm rủi ro rửa tiền, khiến thị trường lo ngại về khung pháp lý.',
    type: 'negative-strong',
    impact: -65
  }, {
    text: 'Chính phủ Hàn Quốc điều tra 17 dự án blockchain mới nổi, khiến một số token giảm mạnh trong ngắn hạn.',
    type: 'negative-strong',
    impact: -68
  }, {
    text: 'Một lỗ hổng bảo mật nghiêm trọng trong ví đa chữ ký khiến cộng đồng theo dõi sát sao, tạo sự bất ổn.',
    type: 'negative-strong',
    impact: -72
  }, {
    text: 'Đồn đoán về "bỏ trốn" của đội ngũ dự án top 20 marketcap lan truyền mạnh, mặc dù CEO phủ nhận nhưng cộng đồng vẫn chia rẽ gay gắt.',
    type: 'negative-strong',
    impact: -75
  }, {
    text: 'Sàn giao dịch châu Âu gặp sự cố hệ thống, dấy lên lo ngại về độ ổn định của cơ sở hạ tầng crypto.',
    type: 'negative-strong',
    impact: -70
  }, {
    text: 'Chuỗi cung ứng chip toàn cầu gặp khó khăn, khiến ngành mining có xu hướng yếu đi.',
    type: 'negative-strong',
    impact: -62
  }, {
    text: 'Các chuyên gia cảnh báo mô hình của một dự án metaverse "quá xa vời" và chưa có sản phẩm thực tế, tạo nghi ngờ về tính khả thi.',
    type: 'negative-strong',
    impact: -58
  }, {
    text: 'Một sàn giao dịch lớn phát hiện "giao dịch gian lận tàng hình" từ một đối tác thanh toán nổi tiếng, shock cả ngành.',
    type: 'negative-strong',
    impact: -78
  }, {
    text: 'Tin tức rò rỉ cho thấy một dự án "được quỹ lớn tài trợ" thực chất chỉ là "bạn bè của CEO", gây mất lòng tin.',
    type: 'negative-strong',
    impact: -72
  }, {
    text: 'Một cá voi bất ngờ "bán hết Bitcoin", gửi thông điệp sợ hãi khắp các sàn giao dịch và khiến giá lao dốc.',
    type: 'negative-strong',
    impact: -82
  }, {
    text: 'Ngân hàng Trung ương châu Âu công bố "sẽ theo dõi sát sao" hoạt động stablecoin, tạo áp lực lên thị trường.',
    type: 'negative-strong',
    impact: -68
  }, {
    text: 'Một dự án token top 50 "hoàn tất hợp nhất với đối tác nhưng không công bố chi tiết", gây nghi ngờ về sự minh bạch.',
    type: 'negative-strong',
    impact: -55
  }, {
    text: 'Dữ liệu cho thấy "thanh khoản trên các sàn giảm mạnh", khiến nhiều nhà đầu tư lo lắng về khả năng rút tiền.',
    type: 'negative-strong',
    impact: -60
  }, {
    text: 'Một quốc gia châu Á công bố sẽ "tịnh duyệt hoàn toàn" hoạt động crypto, gây sốc cho toàn thị trường.',
    type: 'negative-strong',
    impact: -75
  }, {
    text: 'Báo cáo từ một hãng bảo mật cho thấy "hackers đang nhắm vào ví crypto trên mobile", gây hoang mang.',
    type: 'negative-strong',
    impact: -52
  }, {
    text: 'Một sàn giao dịch lớn "tuyên bố phá sản" và sẽ "tìm nhà đầu tư" để cứu, nhưng không ai tin là sẽ thành công.',
    type: 'negative-strong',
    impact: -80
  }, {
    text: 'Công ty AWS phủ nhận "sẽ hỗ trợ các dự án blockchain", khiến nhiều startup mất tự tin về cơ sở hạ tầng.',
    type: 'negative-strong',
    impact: -48
  }, {
    text: 'Một dự án Layer-2 công bố "sẽ tăng phí giao dịch", gây chính xác là ngược lại với cam kết ban đầu.',
    type: 'negative-strong',
    impact: -58
  }, {
    text: 'Một startup NFT lớn "đóng cửa hoàn toàn", khiến cộng đồng NFT lao đao tìm kiếm hy vọng.',
    type: 'negative-strong',
    impact: -65
  }, {
    text: 'Tin tức rò rỉ cho thấy "quỹ lớn đang bán hết crypto portfolio" khiến thị trường hoảng loạn.',
    type: 'negative-strong',
    impact: -72
  }, {
    text: 'Một chính phủ châu Âu "bất ngờ đánh thuế lại các cơ chế farming", gây thiệt hại cho cộng đồng Defi.',
    type: 'negative-strong',
    impact: -55
  }, {
    text: 'CEO một dự án lớn "bị bắt" vì liên quan tới rửa tiền, gây sốc cho toàn ngành.',
    type: 'negative-strong',
    impact: -78
  }, {
    text: 'Một sàn giao dịch "bị hack mất 100 triệu USD" nhưng "không công bố" khiến người dùng lo sợ an toàn tiền của họ.',
    type: 'negative-strong',
    impact: -80
  }, {
    text: 'Tin tức cho biết "một token lớn sẽ bị delisted" khỏi các sàn chính, gây giảm giá mạnh.',
    type: 'negative-strong',
    impact: -62
  }]
};
// Generate a random news item
export const generateRandomNews = (): NewsItem => {
  const newsTypes = Object.keys(newsDatabase) as NewsImpact[];
  const selectedType = newsTypes[Math.floor(Math.random() * newsTypes.length)];
  const newsItems = newsDatabase[selectedType];
  return newsItems[Math.floor(Math.random() * newsItems.length)];
};
// Get news impact color based on impact value (kept for internal use)
export const getNewsImpactColor = (impact: number): string => {
  if (impact > 50) return 'text-green-500';
  if (impact > 0) return 'text-green-400';
  if (impact < -50) return 'text-red-500';
  if (impact < 0) return 'text-red-400';
  return 'text-gray-400';
};
// Get news impact text based on impact value (kept for internal use)
export const getNewsImpactText = (impact: number): string => {
  if (impact > 50) return 'Tích cực mạnh';
  if (impact > 0) return 'Tích cực';
  if (impact < -50) return 'Tiêu cực mạnh';
  if (impact < 0) return 'Tiêu cực';
  return 'Trung tính';
};