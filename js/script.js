const script = {
  "tuyển hồ sơ": {
    intent: "Đăng ký xét tuyển",
    weight: 1,
    responses: [
      [
        "thông tin về đăng ký xét tuyển",
        "<a href='https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020'>Xem tại đây</a>",
        "Bạn có thể hỏi thêm thông tin về:",
        "Ngành học",
      ],
    ],
  },
  "xét hồ sơ": {
    intent: "Đăng ký xét tuyển",
    weight: 1,
    responses: [
      [
        "thông tin về đăng ký xét tuyển",
        "<a href='https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020'>Xem tại đây</a>",
        "Bạn có thể hỏi thêm thông tin về:",
        "Ngành học",
      ],
    ],
  },
  "tuyển thẳng": {
    intent: "Đăng ký xét tuyển",
    weight: 1,
    responses: [
      [
        "Đối tượng xét tuyển",
        "Thí sinh tốt nghiệp THPT năm 2022, đạt thành tích cao trong kỳ thi học sinh giỏi (HSG), cuộc thi Khoa học kỹ thuật (KHKT) do Bộ Giáo dục và Đào tạo tổ chứcs",
        "Nguyện vọng đăng ký: Thí sinh được chọn tối đa 03 nguyện vọng tương ứng với 03 chương trình đào tạo theo thứ tự ưu tiên từ 1 đến 3",
        "Bạn có thể hỏi thêm thông tin về:",
        "Ngành học",
      ],
    ],
  },
  "kiểm tra tư duy": {
    intent: "Đăng ký xét tuyển",
    weight: 1,
    responses: [
      [
        "Thông tin chung về kỳ thi đánh giá tư duy",
        "https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020",
        "Hướng dẫn đăng ký kỳ thi đánh giá tư duy",
        "https://ts.hust.edu.vn/huong-dan-dang-ky-ky-thi-danh-gia-tu-duy-nam-2022",
        "Bạn có thể hỏi thêm thông tin về:",
        "Ngành học",
      ],
    ],
  },
  "đánh giá tư duy": {
    intent: "Đăng ký xét tuyển",
    weight: 1,
    responses: [
      [
        "Thông tin chung về kỳ thi đánh giá tư duy",
        "https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020",
        "Hướng dẫn đăng ký kỳ thi đánh giá tư duy",
        "https://ts.hust.edu.vn/huong-dan-dang-ky-ky-thi-danh-gia-tu-duy-nam-2022",
        "Bạn có thể hỏi thêm thông tin về:",
        "Ngành học",
      ],
    ],
  },
  kttd: {
    intent: "Đăng ký xét tuyển",
    weight: 1,
    responses: [
      [
        "Thông tin chung về kỳ thi đánh giá tư duy",
        "https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020",
        "Hướng dẫn đăng ký kỳ thi đánh giá tư duy",
        "https://ts.hust.edu.vn/huong-dan-dang-ky-ky-thi-danh-gia-tu-duy-nam-2022",
        "Bạn có thể hỏi thêm thông tin về:",
        "Ngành học",
      ],
    ],
  },
  "đổi tổ hợp": {
    intent: "Tổ hợp xét tuyển",
    weight: 1,
    responses: ["Đưa ra các thông tin về đăng ký xóa sửa nguyện vọng"],
  },
  "sửa tổ hợp": {
    intent: "Tổ hợp xét tuyển",
    weight: 1,
    responses: ["Đưa ra các thông tin về đăng ký xóa sửa nguyện vọng"],
  },
  "đổi nguyện vọng": {
    intent: "Tổ hợp xét tuyển",
    weight: 1,
    responses: ["Đưa ra các thông tin về đăng ký xóa sửa nguyện vọng"],
  },
  "sửa nguyện vọng": {
    intent: "Tổ hợp xét tuyển",
    weight: 1,
    responses: ["Đưa ra các thông tin về đăng ký xóa sửa nguyện vọng"],
  },
  phí: {
    intent: "Đăng ký xét tuyển",
    weight: 1,
    responses: [
      [
        "Chào em, Em hãy liên hệ mail tuyensinh@hust.edu.vn",
        "<ul><li>Thông tin cá nhân gồm: ID là số CMND và mật khẩu tài khoản</li><li>SĐT để liên lạc lại</li></ul>",
      ],
    ],
  },
  ngành: {
    intent: "Đăng ký xét tuyển",
    weight: 2,
    responses: [
      "Em hãy tìm hiểu thông tin chi tiết của từng ngành học tại <a href='https://www.hust.edu.vn/cac-vien-khoa-dao-tao'>https://www.hust.edu.vn/cac-vien-khoa-dao-tao</a>",
    ],
  },
  hello: {
    intent: "Bắt đầu cuộc hội thoại",
    weight: 0,
    responses: ["Xin chào. Tôi có thể giúp gì cho bạn?"],
  },
  chào: {
    intent: "Bắt đầu cuộc hội thoại",
    weight: 0,
    responses: ["Xin chào. Tôi có thể giúp gì cho bạn?"],
  },
  bye: {
    intent: "Kết thúc cuộc hội thoại",
    weight: 0,
    responses: [
      "Tạm biệt! Cảm ơn vì đã sử dụng Chatbot!",
      [
        "Cảm ơn vì đã sử dụng chatbot!",
        "Xin hãy đánh giá dịch vụ của chúng tôi!",
        "Tạm biệt!",
      ],
    ],
  },
  "cảm ơn": {
    intent: "Kết thúc cuộc hội thoại",
    weight: 0,
    responses: [
      "Tạm biệt! Cảm ơn vì đã sử dụng Chatbot!",
      [
        "Cảm ơn vì đã sử dụng chatbot!",
        "Xin hãy đánh giá dịch vụ của chúng tôi!",
        "Tạm biệt!",
      ],
    ],
  },
  "kết thúc": {
    intent: "Kết thúc cuộc hội thoại",
    weight: 0,
    responses: [
      "Tạm biệt! Cảm ơn vì đã sử dụng Chatbot!",
      [
        "Cảm ơn vì đã sử dụng chatbot!",
        "Xin hãy đánh giá dịch vụ của chúng tôi!",
        "Tạm biệt!",
      ],
    ],
  },

  "xét tuyển": {
    intent: "Đăng ký xét tuyển",
    weight: 0,
    responses: [
      [
        "Thông tin đăng ký xét tuyển",
        "https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020",
        "Bạn có thể hỏi thêm về các hình thức:",
        "Xét tuyển hồ sơ",
        "Kiểm tra tư duy",
        "Tuyển thẳng",
        "Bạn cũng có thể hỏi về lệ phí thi",
      ],
    ],
  },
  "tuyển sinh": {
    intent: "Đăng ký xét tuyển",
    weight: 0,
    responses: [
      [
        "Thông tin đăng ký xét tuyển",
        "https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020",
        "Bạn có thể hỏi thêm về các hình thức:",
        "Xét tuyển hồ sơ",
        "Kiểm tra tư duy",
        "Tuyển thẳng",
      ],
    ],
  },

  "tổ hợp": {
    intent: "Tổ hợp xét tuyển",
    weight: 0,
    responses: [
      [
        "Đưa ra thông tin về tất cả tổ hợp xét tuyển",
        "Bạn có thể hỏi thêm thông tin về:",
        "Đổi/sửa tổ hợp",
        "Đổi/sửa nguyện vọng",
      ],
    ],
  },
  "hồ sơ nhập học": {
    intent: "Nộp hồ sơ nhập học",
    weight: 0,
    responses: [
      [
        "01 Bản photocopy Chứng minh nhân dân (hoặc Căn cước công dân)",
        "<a href='https://nhaphoc.hust.edu.vn/'>Xem thêm tại đây</a>",
      ],
    ],
  },
  "tài liệu nhập học": {
    intent: "Nộp hồ sơ nhập học",
    weight: 0,
    responses: [
      [
        "01 Bản photocopy Chứng minh nhân dân (hoặc Căn cước công dân)",
        "<a href='https://nhaphoc.hust.edu.vn/'>Xem thêm tại đây</a>",
      ],
    ],
  },

  ielts: {
    intent: "Quy đổi điểm tiếng anh",
    weight: 0,
    responses: [
      "Đưa ra các thông tin về sử dụng chứng chỉ tiếng anh trong xét tuyển",
    ],
  },
  "tiếng anh": {
    intent: "Quy đổi điểm tiếng anh",
    weight: 0,
    responses: ["Thông tin về sử dụng chứng chỉ tiếng anh trong xét tuyển"],
  },
  toeic: {
    intent: "Quy đổi điểm tiếng anh",
    weight: 0,
    responses: ["Thông tin về sử dụng chứng chỉ tiếng anh trong xét tuyển"],
  },
  "điểm thưởng": {
    intent: "Cách tính điểm thưởng",
    weight: 0,
    responses: ["Thông tin về cách tính điểm thưởng"],
  },
};

export default script;
