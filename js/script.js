const script = {
  hello: {
    weight: 0,
    responses: ["Xin chào. Tôi có thể giúp gì cho bạn?"],
  },
  chào: {
    weight: 0,
    responses: ["Xin chào. Tôi có thể giúp gì cho bạn?"],
  },
  bye: {
    weight: 0,
    responses: ["Tạm biệt! Cảm ơn vì đã sử dụng Chatbot!"],
  },
  "cảm ơn": {
    weight: 0,
    responses: ["Tạm biệt! Cảm ơn vì đã sử dụng Chatbot!"],
  },
  "kết thúc": {
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
  "tuyển hồ sơ": {
    weight: 0,
    responses: [
      [
        "thông tin về đăng ký xét tuyển",
        "<a href='https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020'>Xem tại đây</a>",
      ],
    ],
  },
  "xét hồ sơ": {
    weight: 0,
    responses: [
      [
        "thông tin về đăng ký xét tuyển",
        "<a href='https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020'>Xem tại đây</a>",
      ],
    ],
  },
  "tuyển thẳng": {
    weight: 0,
    responses: [
      [
        "Đối tượng xét tuyển",
        "Thí sinh tốt nghiệp THPT năm 2022, đạt thành tích cao trong kỳ thi học sinh giỏi (HSG), cuộc thi Khoa học kỹ thuật (KHKT) do Bộ Giáo dục và Đào tạo tổ chứcs",
        "Nguyện vọng đăng ký: Thí sinh được chọn tối đa 03 nguyện vọng tương ứng với 03 chương trình đào tạo theo thứ tự ưu tiên từ 1 đến 3",
      ],
    ],
  },
  "xét tuyển": {
    weight: 0,
    responses: [
      [
        "Thông tin đăng ký xét tuyển",
        "https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020",
      ],
    ],
  },
  "tuyển sinh": {
    weight: 0,
    responses: [
      [
        "Thông tin đăng ký xét tuyển",
        "https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020",
      ],
    ],
  },
  "kiểm tra tư duy": {
    weight: 0,
    responses: [
      [
        "Thông tin chung về kỳ thi đánh giá tư duy",
        "https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020",
        "Hướng dẫn đăng ký kỳ thi đánh giá tư duy",
        "https://ts.hust.edu.vn/huong-dan-dang-ky-ky-thi-danh-gia-tu-duy-nam-2022",
      ],
    ],
  },
  "đánh giá tư duy": {
    weight: 0,
    responses: [
      [
        "Thông tin chung về kỳ thi đánh giá tư duy",
        "https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020",
        "Hướng dẫn đăng ký kỳ thi đánh giá tư duy",
        "https://ts.hust.edu.vn/huong-dan-dang-ky-ky-thi-danh-gia-tu-duy-nam-2022",
      ],
    ],
  },
  kttd: {
    weight: 0,
    responses: [
      [
        "Thông tin chung về kỳ thi đánh giá tư duy",
        "https://www.hust.edu.vn/hung-bai-viet-tuyen-sinh/-/asset_publisher/AKFI5qRls1e8/content/thong-tin-tuyen-sinh-nam-2020",
        "Hướng dẫn đăng ký kỳ thi đánh giá tư duy",
        "https://ts.hust.edu.vn/huong-dan-dang-ky-ky-thi-danh-gia-tu-duy-nam-2022",
      ],
    ],
  },
  "đổi tổ hợp": {
    weight: 0,
    responses: ["Đưa ra các thông tin về đăng ký xóa sửa nguyện vọng"],
  },
  "sửa tổ hợp": {
    weight: 0,
    responses: ["Đưa ra các thông tin về đăng ký xóa sửa nguyện vọng"],
  },
  "đổi nguyện vọng": {
    weight: 0,
    responses: ["Đưa ra các thông tin về đăng ký xóa sửa nguyện vọng"],
  },
  "sửa nguyện vọng": {
    weight: 0,
    responses: ["Đưa ra các thông tin về đăng ký xóa sửa nguyện vọng"],
  },
  "tổ hợp": {
    weight: 0,
    responses: ["Đưa ra thông tin về tất cả tổ hợp xét tuyển"],
  },
  "hồ sơ nhập học": {
    weight: 0,
    responses: [
      [
        "01 Bản photocopy Chứng minh nhân dân (hoặc Căn cước công dân)",
        "<a href='https://nhaphoc.hust.edu.vn/'>Xem thêm tại đây</a>",
      ],
    ],
  },
  "tài liệu nhập học": {
    weight: 0,
    responses: [
      [
        "01 Bản photocopy Chứng minh nhân dân (hoặc Căn cước công dân)",
        "<a href='https://nhaphoc.hust.edu.vn/'>Xem thêm tại đây</a>",
      ],
    ],
  },
  ngành: {
    weight: 0,
    responses: [
      "Em hãy tìm hiểu thông tin chi tiết của từng ngành học tại <a href='https://www.hust.edu.vn/cac-vien-khoa-dao-tao'>https://www.hust.edu.vn/cac-vien-khoa-dao-tao</a>",
    ],
  },
  ielts: {
    weight: 0,
    responses: [
      "Đưa ra các thông tin về sử dụng chứng chỉ tiếng anh trong xét tuyển",
    ],
  },
  "tiếng anh": {
    weight: 0,
    responses: ["Thông tin về sử dụng chứng chỉ tiếng anh trong xét tuyển"],
  },
  toeic: {
    weight: 0,
    responses: ["Thông tin về sử dụng chứng chỉ tiếng anh trong xét tuyển"],
  },
  "điểm thưởng": {
    weight: 0,
    responses: ["Thông tin về cách tính điểm thưởng"],
  },
  phí: {
    weight: 0,
    responses: [
      [
        "Chào em, Em hãy liên hệ mail tuyensinh@hust.edu.vn",
        "<ul><li>Thông tin cá nhân gồm: ID là số CMND và mật khẩu tài khoản</li><li>SĐT để liên lạc lại</li></ul>",
      ],
    ],
  },
};

export default script;
